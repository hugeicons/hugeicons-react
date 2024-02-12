import * as React from "react";
import type { SVGProps } from "react";

interface Svg02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Svg02Icon = (props: Svg02IconProps) => {
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
        <path d="M15.7579 13L14.2944 16.9123C14.0231 17.6374 13.8875 18 13.6727 18C13.4579 18 13.3223 17.6374 13.051 16.9123L11.5875 13M20.98 13.8333C20.9009 12.9849 20.1807 13 19.4215 13C18.6775 13 18.3054 13 18.0743 13.2441C17.8431 13.4882 17.8431 13.881 17.8431 14.6667V16.3333C17.8431 17.119 17.8431 17.5118 18.0743 17.7559C18.3054 18 18.6775 18 19.4215 18C20.1656 18 20.5377 18 20.7688 17.7559C21 17.5118 21 17.119 21 16.3333C21 15.747 19.8162 15.9167 19.8162 15.9167M9.22363 13H8.25113C7.86249 13 7.66817 13 7.51489 13.0634C6.9929 13.2795 7 13.7873 7 14.25C7 14.7127 6.9929 15.2205 7.51489 15.4366C7.66817 15.5 7.86249 15.5 8.25113 15.5C8.63976 15.5 8.83408 15.5 8.98736 15.5634C9.50935 15.7795 9.50225 16.2873 9.50225 16.75C9.50225 17.2127 9.50935 17.7205 8.98736 17.9366C8.83408 18 8.63976 18 8.25113 18H7.19191" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Svg02Icon;
