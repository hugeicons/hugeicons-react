import * as React from "react";
import type { SVGProps } from "react";

interface ArtboardToolIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtboardToolIcon = (props: ArtboardToolIconProps) => {
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
        <path d="M9 7H15C18.2998 7 19.9497 7 20.9749 8.02513C22 9.05025 22 10.7002 22 14V15C22 18.2998 22 19.9497 20.9749 20.9749C19.9497 22 18.2998 22 15 22H14C10.7002 22 9.05025 22 8.02513 20.9749C7 19.9497 7 18.2998 7 15V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 7L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 5L7 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ArtboardToolIcon;
