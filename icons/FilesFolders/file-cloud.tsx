import * as React from "react";
import type { SVGProps } from "react";

interface FileCloudIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileCloudIcon = (props: FileCloudIconProps) => {
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
        <path d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6.66667C3 7.95533 4.00736 9 5.25 9H9.975C11.0934 9 12 8.0598 12 6.9C12 5.7402 11.0833 4.80003 9.96491 4.80003C10.0897 3.36433 8.97992 2 7.5 2C6.20546 2 5.14305 3.03069 5.03419 4.34393C3.89279 4.45657 3 5.45349 3 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileCloudIcon;
