import * as React from "react";
import type { SVGProps } from "react";

interface TwoFinger02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TwoFinger02Icon = (props: TwoFinger02IconProps) => {
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
        <path d="M8.26301 22.0002V21.1364C8.26301 20.6721 8.24974 20.1912 8.02536 19.7848C7.78125 19.3426 7.395 18.9712 6.88754 18.319C6.53526 17.8663 6.18154 17.413 5.83288 16.9575C5.35602 16.3345 4.84793 15.5586 4.5353 14.8902C4.19172 14.1557 4.13025 13.2681 4.52035 12.5572C4.70599 12.2189 5.01001 11.7844 5.50505 11.2155L7.74284 8.9022M7.74284 13.4406V8.9022M7.74284 8.9022L7.70416 5.19934C7.70416 4.23563 8.39323 3.45439 9.24324 3.45439C10.0932 3.45439 10.7086 4.08138 10.7086 5.04508L10.8094 9.99832L10.7086 3.74396C10.7086 2.78026 11.3976 1.99902 12.2476 1.99902C13.0976 1.99902 13.7867 2.78026 13.7867 3.74396L13.748 7.44683L13.7603 11.0016V9.99832C13.7603 9.93658 13.7579 9.87469 13.7516 9.81328M13.7516 9.81328C13.7498 9.79602 13.7477 9.7788 13.7452 9.76163M13.7516 9.81328C13.7579 9.84213 13.741 9.73238 13.7452 9.76163M13.7452 9.76163C13.7452 8.56803 15.8002 8.76718 16.5119 10.0167M16.7495 12.0014V10.855C16.7366 10.5381 16.6492 10.2579 16.5119 10.0167M16.5119 10.0167C18.9508 10.0631 19.5856 10.855 19.7478 12.0818V15.3288C19.7448 17.0555 19.4567 18.3076 18.4306 19.3374C17.4826 20.4697 17.7056 21.1035 17.682 22.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TwoFinger02Icon;
