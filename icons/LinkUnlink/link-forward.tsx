import * as React from "react";
import type { SVGProps } from "react";

interface LinkForwardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkForwardIcon = (props: LinkForwardIconProps) => {
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
        <path d="M19.1918 9.44118L17.2265 7.46899C15.8104 6.04799 15.2554 5.28357 14.4886 5.55381C13.5325 5.89077 13.8472 8.01692 13.8472 8.73471C12.3607 8.73471 10.8152 8.60259 9.34985 8.87787C4.51259 9.78664 3 13.7153 3 18C4.3691 17.0302 5.73683 15.997 7.38233 15.5476C9.43637 14.9865 11.7304 15.2542 13.8472 15.2542C13.8472 15.972 13.5325 18.0982 14.4886 18.4351C15.3575 18.7413 15.8104 17.9409 17.2265 16.5199L19.1918 14.5477C20.3973 13.338 21 12.7332 21 11.9945C21 11.2558 20.3973 10.6509 19.1918 9.44118Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkForwardIcon;
