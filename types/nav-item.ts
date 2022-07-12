import React from "react";
import { SVGProps } from "react";

export type TNavItem = {
  title: string;
  route: `/${string}`;
  icon?: React.ElementType<SVGProps<SVGSVGElement>>;
  className?: string;
};
