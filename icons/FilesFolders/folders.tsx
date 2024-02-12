import * as React from "react";
import type { SVGProps } from "react";

interface FoldersIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FoldersIcon = (props: FoldersIconProps) => {
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
        <path d="M7.5 9.55556H16.275C18.171 9.55556 19.119 9.55556 19.8 10.005C20.0949 10.1995 20.348 10.4495 20.545 10.7407C21 11.4133 21 12.3496 21 14.2222C21 17.3432 21 18.9038 20.2416 20.0248C19.9133 20.51 19.4914 20.9267 19.0001 21.251C17.8651 22 16.285 22 13.125 22H12C7.75736 22 5.63604 22 4.31802 20.6983C3 19.3965 3 17.3014 3 13.1111V10.3949C3 8.78027 3 7.97294 3.34228 7.36717C3.58628 6.93535 3.94704 6.57904 4.38426 6.33806C4.99761 6 5.81502 6 7.44984 6C8.49722 6 9.02091 6 9.47933 6.16978C10.526 6.55744 10.9576 7.49651 11.4299 8.42945L12 9.55556" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 1.99998H8.5C9.47008 1.99998 10.4182 1.97166 11.2387 2.5552C12.29 3.30287 12.71 4.69708 13.7613 5.44475C14.5818 6.02829 15.5299 5.99998 16.5 5.99998H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FoldersIcon;
