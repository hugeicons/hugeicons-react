import * as React from "react";
import type { SVGProps } from "react";

interface Tornado02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tornado02Icon = (props: Tornado02IconProps) => {
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
        <path d="M9.01654 6.15879C10.9944 4.77262 17.9171 3.55944 18.906 6.15879C20.3862 10.0497 3.87743 12.3805 5.06077 6.15849C5.55508 3.55944 10.5002 2 12.9725 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 11.1934C15.423 13.0706 8.5771 13.8244 6 11.7816" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0219 21.6941C13.0436 21.8816 12.0077 21.989 11 21.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 15.166C9.07731 16.0444 12.3835 15.9574 15 15.2812" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.03906 18.5039C9.49304 18.8598 11.2867 18.8854 12.9988 18.6635" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Tornado02Icon;
