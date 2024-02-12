import * as React from "react";
import type { SVGProps } from "react";

interface Gif01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Gif01Icon = (props: Gif01IconProps) => {
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
        <path d="M7.50406 17C7.46902 16.2336 7.11117 16.0342 6.00567 16H4.50727C3.95558 16 3.50834 16.4477 3.50834 17V19.8944C3.50834 20.6301 3.37142 21.6207 4.05202 21.8983C4.17356 21.9478 4.32262 21.9801 4.50727 22H6.9047C7.23572 22 7.50406 21.7314 7.50406 21.4V19.9C7.50406 19.6791 7.32517 19.5 7.10449 19.5H6.00567M10.5009 16H13.9971M10.5009 22H12.249M12.249 22H13.9971M12.249 22V16.1399M16.9939 22V16.6C16.9939 16.2686 17.2622 16 17.5933 16H20.4902M16.9939 19H19.4912" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.50781 13V12.1963C3.50781 9.22889 3.50781 7.7452 3.97656 6.56021C4.73012 4.65518 6.32381 3.15252 8.3442 2.44198C9.60096 2 11.1745 2 14.3216 2C16.12 2 17.0191 2 17.7372 2.25256C18.8918 2.65858 19.8024 3.51725 20.233 4.60584C20.5009 5.28297 20.5009 6.13079 20.5009 7.82643V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.50781 12C3.50781 10.1591 4.99959 8.66667 6.83979 8.66667C7.50531 8.66667 8.28991 8.78333 8.93697 8.60988C9.51189 8.45576 9.96095 8.00652 10.115 7.43136C10.2884 6.78404 10.1718 5.99912 10.1718 5.33333C10.1718 3.49238 11.6636 2 13.5037 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Gif01Icon;
