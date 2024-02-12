import * as React from "react";
import type { SVGProps } from "react";

interface SoftDrink01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SoftDrink01Icon = (props: SoftDrink01IconProps) => {
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
        <path d="M12 7V4.34832C12 2.1606 12.3737 1.6318 14.4968 2.22769L18 3.21095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 7L7.1398 18.1606C7.31099 19.8368 7.39658 20.6749 7.96796 21.1813C9.1458 22.225 14.7472 22.3198 16.032 21.1813C16.6034 20.6749 16.689 19.8368 16.8602 18.1606L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 7H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SoftDrink01Icon;
