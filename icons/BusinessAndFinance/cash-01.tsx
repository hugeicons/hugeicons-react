import * as React from "react";
import type { SVGProps } from "react";

interface Cash01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cash01Icon = (props: Cash01IconProps) => {
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
        <path d="M21 21C20.7284 21.2035 20.4288 21.3807 20.1062 21.5273C19.0659 22 17.6917 22 14.9432 22H9.05683C6.30834 22 4.9341 22 3.89382 21.5273C3.57124 21.3807 3.27158 21.2035 3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 10C2 6.46252 2 4.69377 3.0528 3.5129C3.22119 3.32403 3.40678 3.14935 3.60746 2.99087C4.86213 2 6.74142 2 10.5 2H13.5C17.2586 2 19.1379 2 20.3925 2.99087C20.5932 3.14935 20.7788 3.32403 20.9472 3.5129C22 4.69377 22 6.46252 22 10C22 13.5375 22 15.3062 20.9472 16.4871C20.7788 16.676 20.5932 16.8506 20.3925 17.0091C19.1379 18 17.2586 18 13.5 18H10.5C6.74142 18 4.86213 18 3.60746 17.0091C3.40678 16.8506 3.22119 16.676 3.0528 16.4871C2 15.3062 2 13.5375 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 10H18.491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10H5.49102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.551 10C14.551 11.3807 13.4317 12.5 12.051 12.5C10.6703 12.5 9.55099 11.3807 9.55099 10C9.55099 8.61929 10.6703 7.5 12.051 7.5C13.4317 7.5 14.551 8.61929 14.551 10Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Cash01Icon;
