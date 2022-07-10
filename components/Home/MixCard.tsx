import Img from "components/Img";

type TopMixCardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};
export default function MixCard({ imgSrc, title, subtitle }: TopMixCardProps) {
  return (
    <div className="bg-[#b3b3b317] p-5 flex flex-col gap-4 rounded-md w-full relative group hover:bg-[#b3b3b328] duration-300">
      <Img
        src={imgSrc}
        containerClassName="aspect-square w-full h-full overflow-hidden"
      />
      <div>
        <h1 className="text-white text-lg">{title}</h1>
        <h4 className="text-[#B3B3B3]">{subtitle}</h4>
      </div>
      <button className="absolute right-3 bottom-[6.6rem] hidden group-hover:block ">
        <Img
          src="/images/icons/Play_Greem.svg"
          containerClassName="h-20 w-20"
        />
      </button>
    </div>
  );
}
