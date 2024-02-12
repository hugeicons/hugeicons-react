import * as React from "react";
import type { SVGProps } from "react";

interface CancelCircleHalfDotIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CancelCircleHalfDotIcon = (props: CancelCircleHalfDotIconProps) => {
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
        <path d="M2.75 12C2.75 17.5228 7.22715 22 12.75 22C18.2728 22 22.75 17.5228 22.75 12C22.75 6.47715 18.2728 2 12.75 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.39856 5.07876C5.53691 4.93211 5.67948 4.7895 5.8261 4.65111M8.69733 2.72939C8.87884 2.6478 9.06313 2.57128 9.25 2.5M3.48172 7.94192C3.39925 8.12518 3.32195 8.31127 3.25 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.75 9L12.75 12M12.75 12L9.75 15M12.75 12L15.75 15M12.75 12L9.75 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CancelCircleHalfDotIcon;
