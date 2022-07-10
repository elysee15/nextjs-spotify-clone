import Img from "components/Img";

type TopMixCardProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};
export default function TopMixCard({
  imgSrc,
  title,
  subtitle,
}: TopMixCardProps) {
  return (
    <div className="bg-[#b3b3b317] p-5 flex flex-col gap-4 rounded-md">
      <Img
        src={imgSrc}
        containerClassName="aspect-square w-full h-[15rem] overflow-hidden"
      />
      <div>
        <h1 className="text-white text-lg">{title}</h1>
        <h4 className="text-[#B3B3B3]">{subtitle}</h4>
      </div>
    </div>
  );
}
