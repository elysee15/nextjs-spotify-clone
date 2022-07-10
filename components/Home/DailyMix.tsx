import Img from "components/Img";
import DailyMixCard from "./DailyMixCard";

const DAILY_MIX_ITEMS = [
  {
    imgSrc: "/images/chill-mix-1.svg",
    label: "Chill Mix",
  },
  {
    imgSrc: "/images/pop-mix.svg",
    label: "Pop Mix",
  },
  {
    imgSrc: "/images/daily-mix-1.svg",
    label: "Daily Mix 1",
  },
  {
    imgSrc: "/images/daily-mix-5.svg",
    label: "Daily Mix 5",
  },
  {
    imgSrc: "/images/folk-acoustic.svg",
    label: "Folk & Acoustic Mix",
  },
  {
    imgSrc: "/images/daily-mix-4.svg",
    label: "Daily Mix 4",
  },
];

function DailyMix() {
  return (
    <div className="mx-10 pt-4 pb-4">
      <h1 className="text-4xl text-white mb-6">Good Afternoon</h1>
      <div className="grid gap-x-8 gap-y-5 grid-cols-3 grid-rows-2">
        {DAILY_MIX_ITEMS.map((item) => (
          <DailyMixCard
            key={item.label}
            title={item.label}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyMix;
