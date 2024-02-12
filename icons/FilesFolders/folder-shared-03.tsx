import * as React from "react";
import type { SVGProps } from "react";

interface FolderShared03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderShared03Icon = (props: FolderShared03IconProps) => {
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
        <path d="M7 5.77778H16.75C18.8567 5.77778 19.91 5.77778 20.6667 6.25528C20.9943 6.462 21.2755 6.72762 21.4944 7.037C22 7.75163 22 8.74646 22 10.7361C22 14.0522 22 15.7102 21.1573 16.9013C20.7926 17.4169 20.3238 17.8596 19.7779 18.2042C18.5167 19 16.7612 19 13.25 19H12C7.28595 19 4.92893 19 3.46447 17.6169C2 16.2338 2 14.0077 2 9.55556V6.66959C2 4.95403 2 4.09625 2.38032 3.45262C2.65142 2.99381 3.05227 2.61523 3.53806 2.35919C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.1804C10.3622 2.59228 10.8418 3.59004 11.3666 4.58129L12 5.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 22H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderShared03Icon;
