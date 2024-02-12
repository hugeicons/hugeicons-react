import * as React from "react";
import type { SVGProps } from "react";

interface Png02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Png02Icon = (props: Png02IconProps) => {
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
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18V13.5C7 13.2239 7.22386 13 7.5 13H8.698C9.1991 13 9.71288 13.2342 9.8629 13.7123C9.96376 14.0338 9.95885 14.3357 9.85863 14.6783C9.70342 15.2089 9.15501 15.5 8.6022 15.5H7.5M12 18L12.1003 13.3694C12.1003 13.2717 12.2261 13.232 12.2822 13.3121L15.2248 17.7113C15.2809 17.7914 15.4067 17.7517 15.4067 17.6539L15.5 13M21 13.8729C20.8796 13.1545 20.7475 13 20 13H18.5C17.9477 13 17.6987 13.4477 17.6987 14V17C17.6987 17.5523 17.9477 18 18.5 18H20.2C20.6418 18 21 17.6418 21 17.2V16.4C21 16.1791 20.8209 16 20.6 16H19.8501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Png02Icon;
