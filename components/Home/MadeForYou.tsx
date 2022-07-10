import Link from "next/link";
import MadeForYouMixCard from "./MixCard";

const MADE_FOR_YOU = [
  {
    imgSrc: "/images/folk-acoustic-rounded.svg",
    title: "Folk & Acoustic...",
    subtitle: "Canyon City, Crooked Still, Gregory Alan...",
  },
  {
    imgSrc: "/images/daily-mix-1-rounded.svg",
    title: "Daily Mix 1",
    subtitle: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
  },
  {
    imgSrc: "/images/daily-mix-5-rounded.svg",
    title: "Daily Mix 5",
    subtitle: "FRENSHIP, Brooke Sierra, Julia Wolf an...",
  },
  {
    imgSrc: "/images/pop-mix-rounded.svg",
    title: "Pop Mix",
    subtitle: "Hey Violet, VÉRITÉ, Timeflies and more",
  },
  {
    imgSrc: "/images/pheelz-mix-rounded.svg",
    title: "Pheelz Mix",
    subtitle: "WizKid, Asake, Tiwa Savage and more",
  },
];

export default function MadeForYou() {
  return (
    <div className="px-10 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl text-white mb-5">Made for you</h1>
        <Link href="/#">
          <a className="uppercase text-[#ADADAD]">See all</a>
        </Link>
      </div>
      <div className="inline-flex gap-10">
        {MADE_FOR_YOU.map((mix) => (
          <MadeForYouMixCard
            key={mix.subtitle}
            imgSrc={mix.imgSrc}
            title={mix.title}
            subtitle={mix.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
