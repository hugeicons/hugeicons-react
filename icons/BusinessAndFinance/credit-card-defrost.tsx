import * as React from "react";
import type { SVGProps } from "react";

interface CreditCardDefrostIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CreditCardDefrostIcon = (props: CreditCardDefrostIconProps) => {
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
        <path d="M22 9.5C21.9635 7.24771 21.7892 5.94656 20.9564 5.0129C20.7879 4.82403 20.6022 4.64935 20.4014 4.49087C19.1461 3.5 17.2659 3.5 13.5056 3.5H10.5041C6.74371 3.5 4.86352 3.5 3.60823 4.49087C3.40746 4.64935 3.22178 4.82403 3.05331 5.0129C2 6.19377 2 7.96252 2 11.5C2 15.0375 2 16.8062 3.05331 17.9871C3.22178 18.176 3.40746 18.3506 3.60823 18.5091C4.86352 19.5 6.74371 19.5 10.5041 19.5H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.0161 12.5C11.8458 15.2942 17.3195 17.2518 15.0161 20.5M18.2161 12.5C15.0458 15.2942 20.5195 17.2518 18.2161 20.5M21.4161 12.5C18.2458 15.2942 23.7195 17.2518 21.4161 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CreditCardDefrostIcon;
