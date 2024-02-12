import * as React from "react";
import type { SVGProps } from "react";

interface NotificationOff03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NotificationOff03Icon = (props: NotificationOff03IconProps) => {
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
        <path d="M17.5 17.8286C13.319 18.9099 8.23949 18.6851 4.43205 17.1543C3.268 16.6862 2.31727 15.7471 2.52992 14.3941C2.66061 13.5625 3.30684 12.8702 3.78561 12.194C4.41272 11.2975 4.47503 10.3197 4.47513 9.27944C4.47513 7.94104 4.84851 6.57751 5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 3.5C8.76108 2.55917 10.339 2 12.0511 2C16.1846 2 19.5355 5.2591 19.5355 9.27941C19.5356 10.3197 19.5976 11.2975 20.2213 12.194C20.6975 12.8701 21.3403 13.5625 21.4702 14.394C21.6084 15.278 21.2527 15.9853 20.6666 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NotificationOff03Icon;
