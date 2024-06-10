import Discover from "@/components/discover/page";
import Explore from "@/components/explore/page";
import Heroes from "@/components/heroes/page";


export default function Home() {
  return (
    <main>
      <Heroes/>
      <Discover/>
      <Explore/>
    </main>
  );
}
