
import data from '../app/db/data.json'
import { SongCard } from './song-card';

function SongsList() {


    return (
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]'>
            {data.map((song, index) => {
                const gridClass =
                    song.size === "large"
                        ? "col-span-2 row-span-2"
                        : song.size === "medium"
                            ? "col-span-2 row-span-1 md:col-span-1 md:row-span-2"
                            : "col-span-2 row-span-1 md:col-span-1 md:row-span-1"

                return <SongCard key={song.id} song={{
                    id: song.id,
                    slug: song.slug,
                    title: song.title,
                    artist: song.author,
                    learnedDate: song.date,
                    albumArt: song.albumArt,
                    videoId: song.videoId,
                    size: song.size as "small" | "medium" | "large"
                }} className={gridClass} index={index} />
            })}
        </ul>
    )
}

export default SongsList