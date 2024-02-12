import * as React from "react";
import type { SVGProps } from "react";

interface FileStarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileStarIcon = (props: FileStarIconProps) => {
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
        <path d="M17.2774 13.6499L18.0693 15.2468C18.1773 15.4691 18.4653 15.6823 18.7083 15.7231L20.1436 15.9636C21.0615 16.1178 21.2775 16.7893 20.6161 17.4516L19.5002 18.5767C19.3112 18.7673 19.2077 19.1347 19.2662 19.3979L19.5857 20.7906C19.8377 21.893 19.2572 22.3195 18.2898 21.7433L16.9445 20.9403C16.7015 20.7952 16.301 20.7952 16.0536 20.9403L14.7082 21.7433C13.7453 22.3195 13.1604 21.8885 13.4124 20.7906L13.7318 19.3979C13.7903 19.1347 13.6868 18.7673 13.4979 18.5767L12.382 17.4516C11.725 16.7893 11.9365 16.1178 12.8544 15.9636L14.2898 15.7231C14.5282 15.6823 14.8162 15.4691 14.9242 15.2468L15.7161 13.6499C16.1481 12.7834 16.85 12.7834 17.2774 13.6499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 11.0026V7.81989C20 6.12616 20 5.27928 19.732 4.60291C19.3012 3.51554 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848V14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileStarIcon;
