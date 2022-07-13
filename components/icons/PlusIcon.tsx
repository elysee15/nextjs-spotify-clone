import * as React from "react";
import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <div className="h-[24px] w-[24px] rounded-sm grid place-content-center bg-current group-hover:bg-white duration-200">
    <svg
      height={12}
      width={12}
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-sc-1bi12j5-0 EQkJl"
      {...props}
    >
      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
    </svg>
  </div>
);

export default PlusIcon;
