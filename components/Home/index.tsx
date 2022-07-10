import DailyMix from "./DailyMix";
import JumpBackIn from "./JumpBackIn";
import JustTheHits from "./JustTheHits";
import MadeForYou from "./MadeForYou";
import RecentlyPlayed from "./RecentlyPlayed";
import TopMix from "./TopMix";
import UniquelyYours from "./UniquelyYours";

export default function Home() {
  return (
    <>
      <DailyMix />
      <TopMix />
      <MadeForYou />
      <TopMix />
      <RecentlyPlayed />
      <JumpBackIn />
      <UniquelyYours />
      <JustTheHits />
    </>
  );
}
