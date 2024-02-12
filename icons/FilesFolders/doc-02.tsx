import * as React from "react";
import type { SVGProps } from "react";

interface Doc02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Doc02Icon = (props: Doc02IconProps) => {
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
        <path d="M21 14.0163C20.9544 13.0244 20.2766 13 19.3571 13C17.9407 13 17.7059 13.3384 17.7059 14.6667V16.3333C17.7059 17.6616 17.9407 18 19.3571 18C20.2766 18 20.9544 17.9756 21 16.9837M10.2949 15.5C10.2949 16.8807 9.18876 18 7.82429 18C7.51642 18 7.36248 18 7.24782 17.933C6.9733 17.7726 7.00076 17.448 7.00076 17.1667V13.8333C7.00076 13.552 6.9733 13.2274 7.24782 13.067C7.36248 13 7.51642 13 7.82429 13C9.18876 13 10.2949 14.1193 10.2949 15.5ZM14 18C13.2236 18 12.8354 18 12.5941 17.7559C12.3529 17.5118 12.3529 17.119 12.3529 16.3333V14.6667C12.3529 13.881 12.3529 13.4882 12.5941 13.2441C12.8354 13 13.2236 13 14 13C14.7764 13 15.1646 13 15.4059 13.2441C15.6471 13.4882 15.6471 13.881 15.6471 14.6667V16.3333C15.6471 17.119 15.6471 17.5118 15.4059 17.7559C15.1646 18 14.7764 18 14 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Doc02Icon;
