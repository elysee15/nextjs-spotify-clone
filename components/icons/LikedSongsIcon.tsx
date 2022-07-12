import * as React from "react";
import { SVGProps } from "react";
import HeartIcon from "./HeartIcon";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <div className="bg-[linear-gradient(135deg,#450af5,#c4efd9)] h-[24px] w-[24px] rounded-sm flex items-center justify-center">
    <HeartIcon />
  </div>
);

export default SvgComponent;
