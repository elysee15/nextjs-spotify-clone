import Img from "components/Img";

type MixProps = {
  imgSrc: string;
  title: string;
};

export default function DailyMixCard({ imgSrc, title }: MixProps) {
  return (
    <div className="flex items-center justify-between pr-2 group relative bg-[#9999991b] max-w-md rounded-md hover:bg-[#99999943] duration-300 overflow-hidden">
      <div className="flex items-center gap-4">
        <Img src={imgSrc} containerClassName="aspect-square h-20 w-20" />
        <h3 className="text-white text-lg">{title}</h3>
      </div>
      <Img
        src="/images/icons/Play_Greem.svg"
        containerClassName="h-20 w-20 hidden group-hover:block"
      />
    </div>
  );
}
