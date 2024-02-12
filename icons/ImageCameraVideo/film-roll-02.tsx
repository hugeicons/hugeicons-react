import * as React from "react";
import type { SVGProps } from "react";

interface FilmRoll02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FilmRoll02Icon = (props: FilmRoll02IconProps) => {
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
        <circle cx="10.5" cy="10.5" r="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.4998 10.5H10.5075M14 7L13 8M8 13L7 14M14 14L13 13M8 8L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 18.5L19.3225 17.5348C20.7193 17.2917 22 18.3514 22 19.7503C22 20.9928 20.9787 22 19.7189 22H18.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FilmRoll02Icon;
