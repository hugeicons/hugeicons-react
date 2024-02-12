import * as React from "react";
import type { SVGProps } from "react";

interface MoneyExchange03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyExchange03Icon = (props: MoneyExchange03IconProps) => {
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
        <path d="M2 10C2 6.68286 4.68286 4 8 4L7.14286 5.71429" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14C22 17.3171 19.3171 20 16 20L16.8571 18.2857" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.25 2.5156C19.0803 1.76088 20.6915 2.01217 21.5651 2.17234C21.8138 2.21794 22 2.46181 22 2.74528V9.20426C22 9.54282 21.738 9.79534 21.4407 9.74278C20.5437 9.58416 18.9966 9.38826 17.25 10.1085C15.3721 10.8828 13.482 11.0285 12.4505 10.9958C12.1939 10.9877 12 10.7457 12 10.4568V3.99467C12 3.66171 12.2552 3.39978 12.5512 3.40549C13.6018 3.42576 15.4316 3.2654 17.25 2.5156Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.25 13.5156C9.08032 12.7609 10.6915 13.0122 11.5651 13.1723C11.8138 13.2179 12 13.4618 12 13.7453V20.2043C12 20.5428 11.738 20.7953 11.4407 20.7428C10.5437 20.5842 8.99663 20.3883 7.25 21.1085C5.37206 21.8828 3.48197 22.0285 2.45052 21.9958C2.19389 21.9877 2 21.7457 2 21.4568V14.9947C2 14.6617 2.25525 14.3998 2.55116 14.4055C3.60178 14.4258 5.43158 14.2654 7.25 13.5156Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9998 6.5H17.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.99981 17.5H7.00879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoneyExchange03Icon;
