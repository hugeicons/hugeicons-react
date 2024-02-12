import * as React from "react";
import type { SVGProps } from "react";

interface UpworkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UpworkIcon = (props: UpworkIconProps) => {
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
        <path d="M2 4.5V10.75C2 12.7925 3.7075 14.5 5.75 14.5C7.7925 14.5 9.5 12.7925 9.5 10.75V4.5C10.75 7.625 13.0965 14.5 17.625 14.5C20.0079 14.5 22 12.5079 22 10.125C22 7.74208 20.0079 5.75 17.625 5.75C15.0913 5.75 13.5912 7.625 13.25 9.5C12.9475 11.1625 11.375 19.5 11.375 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UpworkIcon;
