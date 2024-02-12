import * as React from "react";
import type { SVGProps } from "react";

interface ThreeFinger02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeFinger02Icon = (props: ThreeFinger02IconProps) => {
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
        <path d="M7.76019 13.4795L7.74193 5.02886C7.74014 4.1996 8.41253 3.52639 9.24259 3.52639C10.0714 3.52639 10.7433 4.19762 10.7433 5.02563M10.7433 5.02563V10.0056M10.7433 5.02563L10.7433 3.49728C10.7433 2.66928 11.4151 1.99805 12.2439 1.99805C13.074 1.99805 13.7464 2.67125 13.7446 3.50051L13.7446 11.0103M16.7459 11.9977V10.1448M16.7459 10.1448V5.48285C16.7477 4.65359 16.0753 3.98039 15.2452 3.98039C14.4164 3.98039 13.7446 4.65162 13.7446 5.47962M16.7459 10.1448C17.5525 10.024 19.5247 10.1448 19.748 12.0023V15.684C19.748 17.0435 19.5183 18.1434 18.129 19.7409C17.6136 20.4161 17.6851 21.0947 17.6851 22.002M7.75051 8.9992C7.11342 9.55515 5.50222 11.0778 4.59901 12.4555C3.34453 14.369 5.82223 16.8627 6.84744 18.2521C8.3637 20.0648 8.26245 20.0142 8.26245 21.9951" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ThreeFinger02Icon;
