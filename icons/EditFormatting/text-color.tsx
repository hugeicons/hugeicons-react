import * as React from "react";
import type { SVGProps } from "react";

interface TextColorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextColorIcon = (props: TextColorIconProps) => {
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
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 18L15.6247 9.15847C14.0574 5.05282 13.2737 3 12 3C10.7263 3 9.94261 5.05282 8.37527 9.15847L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TextColorIcon;
