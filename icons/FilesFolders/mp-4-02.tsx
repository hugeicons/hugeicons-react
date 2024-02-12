import * as React from "react";
import type { SVGProps } from "react";

interface Mp402IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mp402Icon = (props: Mp402IconProps) => {
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
        <path d="M13.1765 18V15.5M13.1765 15.5V14C13.1765 13.5286 13.1765 13.2929 13.3212 13.1464C13.4659 13 13.6988 13 14.1647 13H14.8235C15.5058 13 16.0588 13.5596 16.0588 14.25C16.0588 14.9404 15.5058 15.5 14.8235 15.5H13.1765ZM7 18L7.34169 13.6001C7.37067 13.2268 7.38516 13.0402 7.49203 13.0054C7.59889 12.9706 7.70833 13.1168 7.9272 13.4092L8.79999 14.5754C8.9187 14.734 8.97805 14.8133 9.05722 14.8133C9.13638 14.8133 9.19573 14.734 9.31444 14.5754L10.1877 13.4086C10.4064 13.1164 10.5158 12.9703 10.6226 13.005C10.7294 13.0398 10.744 13.2263 10.7732 13.5992L11.1176 18M21 13V15.5M21 15.5V18M21 15.5H19.7647C18.9883 15.5 18.6001 15.5 18.3589 15.2559C18.1176 15.0118 18.1176 14.619 18.1176 13.8333V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mp402Icon;
