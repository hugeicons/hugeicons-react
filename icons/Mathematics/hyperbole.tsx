import * as React from "react";
import type { SVGProps } from "react";

interface HyperboleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HyperboleIcon = (props: HyperboleIconProps) => {
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
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 22L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 8C18.2386 8 16 5.76142 16 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 16C5.76142 16 8 18.2386 8 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default HyperboleIcon;
