import * as React from "react";
import type { SVGProps } from "react";

interface Mp302IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mp302Icon = (props: Mp302IconProps) => {
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
        <path d="M13 18V15.5M13 15.5V14C13 13.5286 13 13.2929 13.1406 13.1464C13.2812 13 13.5075 13 13.96 13H14.6C15.2627 13 15.8 13.5596 15.8 14.25C15.8 14.9404 15.2627 15.5 14.6 15.5H13ZM7 18L7.33193 13.6001C7.36008 13.2268 7.37416 13.0402 7.47797 13.0054C7.58178 12.9706 7.68809 13.1168 7.90071 13.4092L8.74856 14.5754C8.86388 14.734 8.92154 14.8133 8.99844 14.8133C9.07534 14.8133 9.133 14.734 9.24832 14.5754L10.0966 13.4086C10.3091 13.1164 10.4153 12.9703 10.5191 13.005C10.6229 13.0398 10.6371 13.2263 10.6654 13.5992L11 18M17.8 13.9316C17.8857 13.2771 18.448 13 19.0347 13H19.7454C20.3321 13 20.8944 13.2771 20.9801 13.9316C21.0066 14.134 21.0066 14.366 20.9801 14.5684C20.9094 15.108 20.436 15.5 19.9231 15.5M17.8 17.0684C17.8857 17.7229 18.448 18 19.0347 18L19.7454 18C20.3321 18 20.8944 17.7229 20.9801 17.0684C21.0066 16.866 21.0066 16.634 20.9801 16.4316C20.9094 15.892 20.436 15.5 19.9231 15.5M19.9231 15.5H19.8597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Mp302Icon;
