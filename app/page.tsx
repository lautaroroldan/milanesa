import Title from "@/app/components/title";
import Posts from "@/app/components/posts";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Title title="Milanesa" className="my-24" />
      <Posts />
    </div>
  );
}
