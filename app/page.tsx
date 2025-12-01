import Title from "@/components/title";
import SongsList from "@/components/song-list";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="my-24 space-y-2">
        <Title title="Milanesa" />
        <p className="text-sm text-muted-foreground">¿Por qué se llama Milanesa? Mi cerebro mezcló música y comida. El resto te lo cuento   <Link href="/about" className="text-primary font-medium underline">acá</Link></p>
      </div>
      <SongsList />
    </div>
  );
}
