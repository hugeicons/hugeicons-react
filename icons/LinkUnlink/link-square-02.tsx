import * as React from "react";
import type { SVGProps } from "react";

interface LinkSquare02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkSquare02Icon = (props: LinkSquare02IconProps) => {
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
        <path d="M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkSquare02Icon;
