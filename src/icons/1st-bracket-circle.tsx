import * as React from "react";
import type { SVGProps } from "react";

const FirstBracketCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill={"none"}
    {...props}
  >
    <path
      d="M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default FirstBracketCircleIcon;