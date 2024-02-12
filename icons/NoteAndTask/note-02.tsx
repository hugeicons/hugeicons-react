import * as React from "react";
import type { SVGProps } from "react";

interface Note02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Note02Icon = (props: Note02IconProps) => {
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
        <path d="M11 22L9.52157 19.6461C8.49181 18.0065 7.97692 17.1867 7.16053 17.0393C5.83152 16.7993 4.45794 17.7045 3.5 18.509" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 9V16.0279C3.5 17.2307 3.5 17.8321 3.7987 18.3154C4.0974 18.7987 4.63531 19.0677 5.71115 19.6056L9.65542 21.5777C10.4962 21.9981 10.5043 22 11.4443 22H14.5C17.3284 22 18.7426 22 19.6213 21.1213C20.5 20.2426 20.5 18.8284 20.5 16V9C20.5 6.17157 20.5 4.75736 19.6213 3.87868C18.7426 3 17.3284 3 14.5 3H9.5C6.67157 3 5.25736 3 4.37868 3.87868C3.5 4.75736 3.5 6.17157 3.5 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9H8M16 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 2V4M12 2V4M7 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Note02Icon;
