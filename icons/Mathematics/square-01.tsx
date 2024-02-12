import * as React from "react";
import type { SVGProps } from "react";

interface Square01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Square01Icon = (props: Square01IconProps) => {
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
        <path d="M2.71582 7.02474C4.70681 6.91997 5.95606 7.07715 6.73684 8.91069C7.55666 11.111 9.58669 17.2403 10.0942 18.6548C10.6407 20.174 11.3434 21.2218 14.2323 20.9598" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 7.00693C12.1371 6.98198 9.79479 11.7218 8.49349 13.9919C7.06206 16.6113 4.6026 21.1516 2 20.9769" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.0002 8.99985H18.0002L21.2003 6.59981C21.7039 6.22212 22.0002 5.62938 22.0002 4.9999C22.0002 3.89538 21.1047 2.99999 20.0001 3C18.8956 3.00001 18 3.89543 18 4.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Square01Icon;
