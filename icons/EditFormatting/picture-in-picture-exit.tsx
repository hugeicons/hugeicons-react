import * as React from "react";
import type { SVGProps } from "react";

interface PictureInPictureExitIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PictureInPictureExitIcon = (props: PictureInPictureExitIconProps) => {
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
        <path d="M11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.947 6.29018 21.9976 8.05974 21.9999 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 14H15.5C14.6716 14 14 14.6716 14 15.5V18.5C14 19.3284 14.6716 20 15.5 20H20.5C21.3284 20 22 19.3284 22 18.5V15.5C22 14.6716 21.3284 14 20.5 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.00391 11.501L6.00391 9.00098C5.95641 8.42657 6.40047 7.97715 7.00391 8.00098L9.50391 8.00098M11.0039 13.001L7.00391 9.00098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PictureInPictureExitIcon;
