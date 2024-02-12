import * as React from "react";
import type { SVGProps } from "react";

interface Note01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Note01Icon = (props: Note01IconProps) => {
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
        <path d="M17 2V4M12 2V4M7 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 10C3.5 6.70017 3.5 5.05025 4.52513 4.02513C5.55025 3 7.20017 3 10.5 3H13.5C16.7998 3 18.4497 3 19.4749 4.02513C20.5 5.05025 20.5 6.70017 20.5 10V15C20.5 18.2998 20.5 19.9497 19.4749 20.9749C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9749C3.5 19.9497 3.5 18.2998 3.5 15V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15H12M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Note01Icon;
