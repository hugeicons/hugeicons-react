import * as React from "react";
import type { SVGProps } from "react";

interface ArrowLeft04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowLeft04Icon = (props: ArrowLeft04IconProps) => {
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
        <path d="M10 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.41415 13.6026L6.38058 14.3639C7.94638 15.5974 8.72928 16.2141 9.36464 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36464 8.06721C8.72928 7.7859 7.94638 8.40264 6.38059 9.63612L5.41415 10.3974C4.47138 11.1401 4 11.5115 4 12C4 12.4885 4.47138 12.8599 5.41415 13.6026Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowLeft04Icon;
