import * as React from "react";
import type { SVGProps } from "react";

interface LockSync01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LockSync01Icon = (props: LockSync01IconProps) => {
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
        <path d="M19.5433 10.5L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48822 2 1.99998 6.47715 1.99998 12C1.99998 17.5228 6.48822 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2153 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3371 10.8799C9.25712 10.8799 8.71712 11.6599 8.59712 12.1399C8.47712 12.6199 8.47712 14.3599 8.54912 15.0799C8.78912 15.9799 9.38912 16.3519 9.97712 16.4719C10.5171 16.5199 12.7971 16.5019 13.4571 16.5019C14.4171 16.5199 15.1371 16.1599 15.4371 15.0799C15.4971 14.7199 15.5571 12.7399 15.4071 12.1399C15.0891 11.1799 14.2971 10.8799 13.6971 10.8799H10.3371Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.25 10.4585C10.25 10.3985 10.2582 10.0531 10.2596 9.61854C10.2608 9.22145 10.226 8.83854 10.4156 8.48814C11.126 7.07454 13.166 7.21854 13.67 8.65854C13.7573 8.89562 13.7625 9.27146 13.76 9.61854C13.7567 10.062 13.766 10.4585 13.766 10.4585" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LockSync01Icon;
