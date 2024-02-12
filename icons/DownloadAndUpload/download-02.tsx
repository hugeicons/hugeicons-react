import * as React from "react";
import type { SVGProps } from "react";

interface Download02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Download02Icon = (props: Download02IconProps) => {
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
        <path d="M3 14L3.23384 14.6626C4.144 17.2413 4.59908 18.5307 5.63742 19.2654C6.67576 20 8.0431 20 10.7778 20H13.2222C15.9569 20 17.3242 20 18.3626 19.2654C19.4009 18.5307 19.856 17.2413 20.7662 14.6626L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 14V4M12 14C11.2998 14 9.99153 12.0057 9.5 11.5M12 14C12.7002 14 14.0085 12.0057 14.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Download02Icon;
