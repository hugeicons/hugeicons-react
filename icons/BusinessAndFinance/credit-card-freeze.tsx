import * as React from "react";
import type { SVGProps } from "react";

interface CreditCardFreezeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CreditCardFreezeIcon = (props: CreditCardFreezeIconProps) => {
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
        <path d="M22 9C21.9635 6.74771 21.7892 5.44656 20.9564 4.5129C20.7879 4.32403 20.6022 4.14935 20.4014 3.99087C19.1461 3 17.2659 3 13.5056 3H10.5041C6.74371 3 4.86352 3 3.60823 3.99087C3.40746 4.14935 3.22178 4.32403 3.05331 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.05331 17.4871C3.22178 17.676 3.40746 17.8506 3.60823 18.0091C4.86352 19 6.74371 19 10.5041 19H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 13V14.7778M18 14.7778V19.2222M18 14.7778L19.5 14M18 14.7778L16.5 14M18 19.2222L18 21M18 19.2222L16.5 20M18 19.2222L19.5 20M22 17L20.2222 17M20.2222 17L15.7778 17M20.2222 17L21 18.5M20.2222 17L21 15.5M15.7778 17L14 17M15.7778 17L15 15.5M15.7778 17L15 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CreditCardFreezeIcon;
