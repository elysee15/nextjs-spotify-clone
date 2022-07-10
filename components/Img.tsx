import Image, { ImageProps } from "next/image";

type ImgProps = { containerClassName?: string } & ImageProps;

const Img = ({ containerClassName = "h-10 w-10", alt, ...props }: ImgProps) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <Image objectFit="cover" alt={alt} layout="fill" {...props} />
    </div>
  );
};

export default Img;
