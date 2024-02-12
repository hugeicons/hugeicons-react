import * as React from "react";
import type { SVGProps } from "react";

interface Hdr02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hdr02Icon = (props: Hdr02IconProps) => {
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
        <path d="M7 18V15.5M7 15.5V13M7 15.5H9.88379M9.88379 13V15.5M9.88379 15.5V18M17.5393 18V16M17.5393 16V14C17.5393 13.2675 17.6058 13 18.4045 13H19.7022C20.419 13 21 13.6716 21 14.5C21 15.3284 20.419 16 19.7022 16M17.5393 16H19.7022M19.7022 16L20.5989 18M15.4872 15.5C15.4872 16.8807 14.3808 18 13.016 18C12.708 18 12.5541 18 12.4394 17.933C12.1648 17.7726 12.1922 17.448 12.1922 17.1667V13.8333C12.1922 13.552 12.1648 13.2274 12.4394 13.067C12.5541 13 12.708 13 13.016 13C14.3808 13 15.4872 14.1193 15.4872 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Hdr02Icon;
