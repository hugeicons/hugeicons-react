import * as React from "react";
import type { SVGProps } from "react";

interface BorderBottom01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BorderBottom01Icon = (props: BorderBottom01IconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M2.5 17.5C2.69854 18.5939 3.04969 19.399 3.6708 20.0355C5.09987 21.5 7.39991 21.5 12 21.5C16.6001 21.5 18.9001 21.5 20.3292 20.0355C20.9503 19.399 21.3015 18.5939 21.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.75143 6.31035C2.94471 5.26828 3.28657 4.50135 3.89124 3.89503C4.49591 3.28872 5.26076 2.94592 6.3 2.75211M2.50496 14C2.5 13.414 2.5 12.7117 2.5 12.0259C2.5 11.3401 2.5 10.5751 2.50496 9.9891M10.1 2.50497C10.6844 2.5 11.3161 2.5 12 2.5C12.6839 2.5 13.3156 2.5 13.9001 2.50497M17.7 2.75211C18.7392 2.94592 19.5041 3.28871 20.1088 3.89503C20.7134 4.50135 21.0553 5.26828 21.2486 6.31035M21.495 14C21.5 13.414 21.5 12.7117 21.5 12.0259C21.5 11.3402 21.5 10.5751 21.495 9.9891" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12L4 12M20 12L21.5 12M12 15L12 9M12 4.46875L12 3M9 12L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BorderBottom01Icon;
