import * as React from "react";
import type { SVGProps } from "react";

interface SearchAreaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SearchAreaIcon = (props: SearchAreaIconProps) => {
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
        <path d="M19.4 19.4L22 22M20.7 14.85C20.7 11.6191 18.0809 9 14.85 9C11.6191 9 9 11.6191 9 14.85C9 18.0809 11.6191 20.7 14.85 20.7C18.0809 20.7 20.7 18.0809 20.7 14.85Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 6C2.1305 4.6645 2.4262 3.7663 3.09625 3.09625C3.7663 2.4262 4.6645 2.1305 6 2M6 22C4.6645 21.8695 3.7663 21.5738 3.09625 20.9037C2.4262 20.2337 2.1305 19.3355 2 18M22 6C21.8695 4.6645 21.5738 3.7663 20.9037 3.09625C20.2337 2.4262 19.3355 2.1305 18 2M2 10L2 14M14 2L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SearchAreaIcon;
