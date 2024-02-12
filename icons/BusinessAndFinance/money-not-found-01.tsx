import * as React from "react";
import type { SVGProps } from "react";

interface MoneyNotFound01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyNotFound01Icon = (props: MoneyNotFound01IconProps) => {
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
        <path d="M4.46334 4.5C4.145 4.62804 3.86325 4.78886 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C16.4923 20 18.2568 20 19.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4.01578C8.7277 4 9.55437 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 14.3126 22 15.8693 21.7058 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5098 12H18.5008" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 12H5.49102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.7438 13.7422C13.2895 14.2094 12.6542 14.4996 11.9512 14.4996C10.5705 14.4996 9.45117 13.3803 9.45117 11.9996C9.45117 11.2966 9.7414 10.6613 10.2086 10.207" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoneyNotFound01Icon;
