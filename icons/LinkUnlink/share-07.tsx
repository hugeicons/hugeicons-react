import * as React from "react";
import type { SVGProps } from "react";

interface Share07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Share07Icon = (props: Share07IconProps) => {
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
        <path d="M20.5 5.5C20.5 7.15685 19.1569 8.5 17.5 8.5C15.8431 8.5 14.5 7.15685 14.5 5.5C14.5 3.84315 15.8431 2.5 17.5 2.5C19.1569 2.5 20.5 3.84315 20.5 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 11.5C8.5 13.1569 7.15685 14.5 5.5 14.5C3.84315 14.5 2.5 13.1569 2.5 11.5C2.5 9.84315 3.84315 8.5 5.5 8.5C7.15685 8.5 8.5 9.84315 8.5 11.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.5 18.5C21.5 20.1569 20.1569 21.5 18.5 21.5C16.8431 21.5 15.5 20.1569 15.5 18.5C15.5 16.8431 16.8431 15.5 18.5 15.5C20.1569 15.5 21.5 16.8431 21.5 18.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5348 4.58109C14.1554 4.52765 13.7677 4.5 13.3733 4.5C10.2974 4.5 7.62058 6.18227 6.24054 8.66317M19.7131 7.49453C20.8311 8.86497 21.5 10.6056 21.5 12.5C21.5 13.8758 21.1472 15.1705 20.5258 16.3012M15.8816 20.1117C15.0917 20.3638 14.2486 20.5 13.3733 20.5C9.58287 20.5 6.39853 17.9454 5.5 14.4898" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Share07Icon;
