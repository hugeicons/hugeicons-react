import * as React from "react";
import type { SVGProps } from "react";

interface Quran02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Quran02Icon = (props: Quran02IconProps) => {
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
        <path d="M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.6716 6.67157L12.5 5.5L11.3284 6.67157H9.67157V8.32843L8.5 9.5L9.67157 10.6716V12.3284H11.3284L12.5 13.5L13.6716 12.3284H15.3284V10.6716L16.5 9.5L15.3284 8.32843V6.67157H13.6716Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19.5V5.5C4 3.567 5.567 2 7.5 2H17.5C19.433 2 21 3.567 21 5.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Quran02Icon;
