import * as React from "react";
import type { SVGProps } from "react";

interface ImageCropIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageCropIcon = (props: ImageCropIconProps) => {
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
        <path d="M22 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20C9.68373 16.4365 13.8235 11.7106 20 15.2551" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 4L14 4C16.8284 4 18.2426 4 19.1213 4.87868C20 5.75736 20 7.17157 20 10L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ImageCropIcon;
