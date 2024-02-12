import * as React from "react";
import type { SVGProps } from "react";

interface LaptopCloudIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LaptopCloudIcon = (props: LaptopCloudIconProps) => {
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
        <path d="M20 15V12M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0934 4.8 19.975 4.8C19.955 4.8 19.975 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LaptopCloudIcon;
