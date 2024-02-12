import * as React from "react";
import type { SVGProps } from "react";

interface Lamp02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Lamp02Icon = (props: Lamp02IconProps) => {
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
        <path d="M19.9244 12.102C20.3882 11.4385 18.588 9.20647 18.0742 8.81246C17.6051 8.45281 17 8.27446 15.7896 7.91776C14.5811 7.56161 13.2866 7 12 7C10.7134 7 9.41894 7.56161 8.21043 7.91776C7.00005 8.27446 6.39486 8.45281 5.92582 8.81246C5.41197 9.20647 3.61181 11.4385 4.07564 12.102C4.96428 13.3732 19.1407 13.2231 19.9244 12.102Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12.0002 20V22M15 19L17 20.4999M9 19L7 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Lamp02Icon;
