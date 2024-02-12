import * as React from "react";
import type { SVGProps } from "react";

interface Gif02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Gif02Icon = (props: Gif02IconProps) => {
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
        <path d="M14.8597 22H10.548C7.25691 22 5.61139 22 4.46864 21.2022C4.14123 20.9736 3.85055 20.7025 3.60545 20.3971C2.75 19.3313 2.75 17.7966 2.75 14.7273V12.1818C2.75 9.21865 2.75 7.73706 3.22323 6.55375C3.98399 4.65142 5.5929 3.15088 7.63261 2.44135C8.90137 2 10.4899 2 13.6671 2C15.4827 2 16.3904 2 17.1154 2.2522C18.2809 2.65765 19.2003 3.5151 19.635 4.60214C19.9055 5.27832 19.9055 6.12494 19.9055 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.75 12C2.75 10.1591 4.25603 8.66667 6.11381 8.66667C6.78569 8.66667 7.57779 8.78333 8.23104 8.60988C8.81145 8.45576 9.2648 8.00652 9.42033 7.43136C9.59536 6.78404 9.47763 5.99912 9.47763 5.33333C9.47763 3.49238 10.9837 2 12.8414 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.842 18H15.3648M10.416 13.8506C10.2901 13.0495 10.1346 13.0487 8.8054 13H7.79626C7.23892 13 6.78711 13.4477 6.78711 14L6.78711 17C6.78711 17.5523 7.23892 18 7.79625 18H9.61272C10.0029 18 10.416 17.6866 10.416 17.3V16.2C10.416 16.0895 10.3034 15.896 10.1919 15.896H9.06776M12.842 13H14.1034M14.1034 13H15.3648M14.1034 13V17.8749M21.2511 13H18.7283C18.1709 13 17.7191 13.4477 17.7191 14V15.5M17.7191 15.5V18M17.7191 15.5H20.242" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Gif02Icon;
