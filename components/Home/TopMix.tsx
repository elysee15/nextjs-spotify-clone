import Link from "next/link";
import TopMixCard from "./MixCard";

const TOP_MIXES = [
  {
    imgSrc: "/images/chill-mix-rounded.svg",
    title: "Chill Mix",
    subtitle: "Julia Wolf, Khalid, ayokay and more",
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
  {
    imgSrc: "/images/indie-mix-rounded.svg",
    title: "Indie Mix",
    subtitle: "Joywave, The xx, The Neighbourhood and...",
  },
  {
    imgSrc: "/images/daily-mix-rounded.svg",
    title: "Daily Mix 1",
    subtitle: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
  },
];

function TopMix() {
  return (
    <div className="px-10 py-8">
      <div className="flex justify-between">
        <h1 className="text-3xl text-white mb-5">Your top mixes</h1>
        <Link href="/#">
          <a className="uppercase text-[#ADADAD]">See all</a>
        </Link>
      </div>
      <div className="inline-flex gap-10">
        {TOP_MIXES.map((mix) => (
          <TopMixCard
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

export default TopMix;
