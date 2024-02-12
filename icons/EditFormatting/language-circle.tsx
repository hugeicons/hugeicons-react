import * as React from "react";
import type { SVGProps } from "react";

interface LanguageCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LanguageCircleIcon = (props: LanguageCircleIconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8.37931H11.5M17 8.37931H14.5M11.5 8.37931H14.5M11.5 8.37931V7M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M8.39286 17C9.41205 16.0628 10.5631 14.9134 11.6071 13.6158M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LanguageCircleIcon;
