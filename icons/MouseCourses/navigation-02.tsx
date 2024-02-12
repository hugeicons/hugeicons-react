import * as React from "react";
import type { SVGProps } from "react";

interface Navigation02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Navigation02Icon = (props: Navigation02IconProps) => {
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
        <path d="M2.00017 11.9496C1.96943 12.9853 6.03156 15.4206 6.41417 14.9373C7.15382 13.8962 7.21955 10.1078 6.45955 9.06478C6.10401 8.58035 2.03018 10.9389 2.00017 11.9496Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9496 21.9998C12.9853 22.0306 15.4206 17.9684 14.9373 17.5858C13.8962 16.8462 10.1078 16.7805 9.06478 17.5404C8.58035 17.896 10.9389 21.9698 11.9496 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.9998 11.9496C22.0306 12.9853 17.9684 15.4206 17.5858 14.9373C16.8462 13.8962 16.7805 10.1078 17.5404 9.06478C17.896 8.58035 21.9698 10.9389 21.9998 11.9496Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9496 2.00017C12.9853 1.96943 15.4206 6.03156 14.9373 6.41417C13.8962 7.15382 10.1078 7.21955 9.06478 6.45955C8.58035 6.10401 10.9389 2.03018 11.9496 2.00017Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Navigation02Icon;
