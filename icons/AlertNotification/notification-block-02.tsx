import * as React from "react";
import type { SVGProps } from "react";

interface NotificationBlock02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationBlock02Icon = (props: NotificationBlock02IconProps) => {
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
        <path d="M14 2.42385C13.2178 2.14933 12.3764 2 11.5 2C7.34413 2 3.97513 5.35786 3.97513 9.5C3.97503 10.5718 3.91272 11.5793 3.28561 12.5029C2.80684 13.1995 2.16061 13.9129 2.02992 14.7696C1.81727 16.1636 2.768 17.1312 3.93205 17.6134C8.39481 19.4622 14.6052 19.4622 19.0679 17.6134C20.232 17.1312 21.1827 16.1636 20.9701 14.7696C20.8702 14.1149 20.4692 13.5438 20.0719 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.05 5.05L19.95 9.95M21 7.5C21 5.567 19.433 4 17.5 4C15.567 4 14 5.567 14 7.5C14 9.433 15.567 11 17.5 11C19.433 11 21 9.433 21 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 19C7.95849 20.7252 9.57553 22 11.5 22C13.4245 22 15.0415 20.7252 15.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NotificationBlock02Icon;
