import * as React from "react";
import type { SVGProps } from "react";

interface Note04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Note04Icon = (props: Note04IconProps) => {
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
        <path d="M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V12C20.5 16.714 20.5 19.0711 19.0355 20.5355C17.5711 22 15.214 22 10.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 15H12M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 14.5C20.5 15.8807 19.3807 17 18 17C17.5007 17 16.912 16.9125 16.4265 17.0426C15.9951 17.1582 15.6582 17.4951 15.5426 17.9265C15.4125 18.412 15.5 19.0007 15.5 19.5C15.5 20.8807 14.3807 22 13 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Note04Icon;
