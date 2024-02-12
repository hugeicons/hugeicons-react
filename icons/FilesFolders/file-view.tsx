import * as React from "react";
import type { SVGProps } from "react";

interface FileViewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileViewIcon = (props: FileViewIconProps) => {
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
        <path d="M20.4593 17.5153C20.8198 17.9308 21 18.1385 21 18.5C21 18.8615 20.8198 19.0692 20.4593 19.4847C19.5612 20.5199 17.9381 22 16 22C14.0619 22 12.4388 20.5199 11.5407 19.4847C11.1802 19.0692 11 18.8615 11 18.5C11 18.1385 11.1802 17.9308 11.5407 17.5153C12.4388 16.4801 14.0619 15 16 15C17.9381 15 19.5612 16.4801 20.4593 17.5153Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 13.0032V7.81989C20 6.12616 20 5.27928 19.732 4.60291C19.3012 3.51554 18.3902 2.65784 17.2352 2.25228C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44148C5.81714 3.15122 4.22281 4.6522 3.46894 6.55509C3 7.73875 3 9.22077 3 12.1848V14.731C3 17.8013 3 19.3364 3.8477 20.4025C4.09058 20.708 4.37862 20.9792 4.70307 21.2078C5.61506 21.8506 6.85019 21.9757 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9922 18.5H16.0012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileViewIcon;
