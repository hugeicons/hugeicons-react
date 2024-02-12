import * as React from "react";
import type { SVGProps } from "react";

interface BlurIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BlurIcon = (props: BlurIconProps) => {
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
        <path d="M12.5926 2.21C12.2371 1.93 11.7433 1.93 11.3877 2.21C9.51122 3.66 3.97049 8.39 4.00012 13.9C4.00012 18.36 7.58531 22 12.0001 22C16.4149 22 20 18.37 20 13.91C20.0099 8.48 14.4593 3.67 12.5926 2.21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L20 15M12 14.1806L19 10.5M12 9.36145L16.5727 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BlurIcon;
