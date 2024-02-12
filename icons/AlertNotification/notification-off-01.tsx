import * as React from "react";
import type { SVGProps } from "react";

interface NotificationOff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationOff01Icon = (props: NotificationOff01IconProps) => {
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
        <path d="M19.0045 19H4.8005C3.78202 19 3 18.1508 3 17.1527C3 16.427 3.34173 15.7438 3.92239 15.3084C5.16997 14.373 5.08548 12.887 5.15897 11.491C5.24716 9.81588 5.93091 8.14021 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 5.5C10.2958 5.17734 11.0937 5 12.0025 5C15.6474 5 18.6545 7.85223 18.8461 11.491C18.9196 12.887 18.8351 14.373 20.0827 15.3084C20.6224 15.7131 20.9557 16.332 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default NotificationOff01Icon;
