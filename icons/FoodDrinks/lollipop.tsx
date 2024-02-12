import * as React from "react";
import type { SVGProps } from "react";

interface LollipopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LollipopIcon = (props: LollipopIconProps) => {
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
        <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 7.96546C7 6.49988 9 5.66919 10.2857 6.12252C11.7609 6.64264 12.0271 8.38068 13.5 8.90686C15 9.44274 15.5 7.46966 18 7.93527" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LollipopIcon;
