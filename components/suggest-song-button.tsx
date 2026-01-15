"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Lightbulb, Music, Send } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { createSuggestion } from "@/app/actions/suggestions"
import { suggestSongSchema, type SuggestSongFormValues } from "@/lib/validators/suggest-song"

export default function SuggestSongButton() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SuggestSongFormValues>({
    resolver: zodResolver(suggestSongSchema),
    defaultValues: {
      songName: "",
      artist: "",
      comment: "",
    },
    mode: "onChange",
  })

  const onSubmit = (values: SuggestSongFormValues) => {

    startTransition(async () => {
      const result = await createSuggestion(values)

      if (!result.ok) {
        return
      }

      reset()
      setOpen(false)
    })
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      reset()
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 group px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200"
          aria-label="Sugerir una canción"
        >
          <Lightbulb className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span className="text-sm font-semibold">Sugerir canción</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Music className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Sugerir una canción</DialogTitle>
              <DialogDescription>
                Contame qué tema te gustaría que aparezca en Milanesa.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="songName">
              Canción <span className="text-destructive">*</span>
            </Label>
            <Input
              id="songName"
              type="text"
              placeholder="ej: Hysteria"
              className={cn(errors.songName && "border-destructive")}
              aria-invalid={Boolean(errors.songName)}
              aria-describedby={errors.songName ? "songName-error" : undefined}
              {...register("songName")}
            />
            {errors.songName && (
              <p id="songName-error" className="text-xs text-destructive">
                {errors.songName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="artist">
              Artista <span className="text-destructive">*</span>
            </Label>
            <Input
              id="artist"
              type="text"
              placeholder="ej: Muse"
              className={cn(errors.artist && "border-destructive")}
              aria-invalid={Boolean(errors.artist)}
              aria-describedby={errors.artist ? "artist-error" : undefined}
              {...register("artist")}
            />
            {errors.artist && (
              <p id="artist-error" className="text-xs text-destructive">
                {errors.artist.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">
              Comentario <span className="text-muted-foreground">(opcional)</span>
            </Label>
            <Textarea
              id="comment"
              rows={3}
              placeholder="¿Por qué te gustaría que aprenda esta canción?"
              className={cn("resize-none", errors.comment && "border-destructive")}
              aria-invalid={Boolean(errors.comment)}
              aria-describedby={errors.comment ? "comment-error" : undefined}
              {...register("comment")}
            />
            {errors.comment && (
              <p id="comment-error" className="text-xs text-destructive">
                {errors.comment.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isValid || isSubmitting || isPending}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Enviar sugerencia
          </Button>
            <p className="text-xs text-center text-muted-foreground">
              Tu sugerencia será revisada y considerada para futuras actualizaciones.
            </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
