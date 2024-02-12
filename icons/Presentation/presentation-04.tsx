import * as React from "react";
import type { SVGProps } from "react";

interface Presentation04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Presentation04Icon = (props: Presentation04IconProps) => {
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
        <path d="M2.5 11.5C2.5 14.3284 2.5 15.7426 3.37868 16.6213C4.25736 17.5 5.67157 17.5 8.5 17.5H15.5C18.3284 17.5 19.7426 17.5 20.6213 16.6213C21.5 15.7426 21.5 14.3284 21.5 11.5V9.5C21.5 6.67157 21.5 5.25736 20.6213 4.37868C19.7426 3.5 18.3284 3.5 15.5 3.5H8.5C5.67157 3.5 4.25736 3.5 3.37868 4.37868C2.5 5.25736 2.5 6.67157 2.5 9.5V11.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22L12.0001 19L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.7783V22.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Presentation04Icon;
