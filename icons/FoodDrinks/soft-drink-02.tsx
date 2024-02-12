import * as React from "react";
import type { SVGProps } from "react";

interface SoftDrink02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SoftDrink02Icon = (props: SoftDrink02IconProps) => {
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
        <path d="M6.63244 18.2626L5.03072 6.09986C4.91063 5.188 5.11589 5 6.12552 5H16.8745C17.8841 5 18.0894 5.188 17.9693 6.09986L16.3676 18.2626C16.1495 19.9182 16.0405 20.746 15.4139 21.2437C14.1165 22.2744 8.827 22.2295 7.58606 21.2437C6.95948 20.746 6.85047 19.9182 6.63244 18.2626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 19L13.946 2.94128C13.9771 2.41272 14.4148 2 14.9443 2H19.0014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 10C6.18182 9.66667 6.78182 9 8.09091 9C9.72727 9 9.29545 10 10.3864 10C11.4773 10 13.1136 9 14.75 9C16.3864 9 17.5 10 17.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0089 16H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SoftDrink02Icon;
