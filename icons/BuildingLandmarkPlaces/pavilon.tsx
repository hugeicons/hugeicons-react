import * as React from "react";
import type { SVGProps } from "react";

interface PavilonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PavilonIcon = (props: PavilonIconProps) => {
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
        <path d="M6 11.3338V21.5M18 11.3361V21.5M9.5 21.5L10.0065 18.4592C10.1261 17.741 10.1859 17.3819 10.3463 17.1165C10.7446 16.4571 11.3843 16.4969 12 16.4969C12.6157 16.4969 13.2554 16.4571 13.6537 17.1165C13.8141 17.3819 13.8739 17.741 13.9935 18.4592L14.5 21.5M3 21.5H21M7.12038 11.4811C5.81567 11.4811 3.90987 10.864 3.03476 8.51048C5.33669 8.37831 10.2316 7.831 12.0044 2.5C13.8535 7.91432 18.672 8.37831 20.9739 8.51048C20.0988 10.864 18.193 11.4811 16.8883 11.4811H7.12038Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PavilonIcon;
