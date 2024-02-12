import * as React from "react";
import type { SVGProps } from "react";

interface Wrench02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Wrench02Icon = (props: Wrench02IconProps) => {
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
        <path d="M18 7.10593C17.9999 8.55778 16.5891 9.89558 14.4697 11.9901C13.1062 13.3376 10.8936 13.336 9.52937 11.9892C7.41145 9.8961 5.99988 8.55754 6 7.10568C6.00012 5.65383 6.3543 5.36258 9.60848 2.14658C9.92161 1.83445 10.4602 2.05389 10.4602 2.49338L10.4604 5.80524C10.4604 6.64587 11.1488 7.32849 11.9994 7.32842C12.85 7.32835 13.5396 6.64688 13.5398 5.80625L13.5405 2.49435C13.5406 2.05485 14.0793 1.83532 14.3924 2.14739C17.646 5.36287 18.0001 5.65408 18 7.10593Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 12L15 19.1652C15 20.7308 13.6569 22 12 22C10.3431 22 9 20.7308 9 19.1652L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0063 18.9995L12 19.0059" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Wrench02Icon;
