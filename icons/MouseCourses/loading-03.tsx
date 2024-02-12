import * as React from "react";
import type { SVGProps } from "react";

interface Loading03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Loading03Icon = (props: Loading03IconProps) => {
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
        <path d="M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 12L3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.3635 5.63672L16.2422 7.75804" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.75706 16.2422L5.63574 18.3635" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.3635 18.3635L16.2422 16.2422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.75706 7.75804L5.63574 5.63672" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Loading03Icon;
