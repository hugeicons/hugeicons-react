import * as React from "react";
import type { SVGProps } from "react";

interface LeftToRightListNumberIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LeftToRightListNumberIcon = (props: LeftToRightListNumberIconProps) => {
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
        <path d="M11 6L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 18L21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 15H4.5C4.77879 15 4.91819 15 5.03411 15.0231C5.51014 15.1177 5.88225 15.4899 5.97694 15.9659C6 16.0818 6 16.2212 6 16.5C6 16.7788 6 16.9182 5.97694 17.0341C5.88225 17.5101 5.51014 17.8823 5.03411 17.9769C4.91819 18 4.77879 18 4.5 18C4.22121 18 4.08181 18 3.96589 18.0231C3.48986 18.1177 3.11775 18.4899 3.02306 18.9659C3 19.0818 3 19.2212 3 19.5V20.4C3 20.6828 3 20.8243 3.08787 20.9121C3.17574 21 3.31716 21 3.6 21H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3H4.2C4.36569 3 4.5 3.13431 4.5 3.3V9M4.5 9H3M4.5 9H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LeftToRightListNumberIcon;
