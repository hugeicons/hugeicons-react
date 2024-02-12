import * as React from "react";
import type { SVGProps } from "react";

interface ChefHatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChefHatIcon = (props: ChefHatIconProps) => {
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
        <path d="M18 13C20.2091 13 22 11.2091 22 9C22 6.79086 20.2091 5 18 5C17.1767 5 16.4115 5.24874 15.7754 5.67518M6 13C3.79086 13 2 11.2091 2 9C2 6.79086 3.79086 5 6 5C6.82332 5 7.58854 5.24874 8.22461 5.67518M15.7754 5.67518C15.2287 4.11714 13.7448 3 12 3C10.2552 3 8.77132 4.11714 8.22461 5.67518M15.7754 5.67518C15.9209 6.08981 16 6.53566 16 7C16 7.3453 15.9562 7.68038 15.874 8M9.46487 7C9.15785 6.46925 8.73238 6.0156 8.22461 5.67518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 17.5C7.59905 16.8776 9.69952 16.5 12 16.5C14.3005 16.5 16.401 16.8776 18 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 21C6.86556 20.3776 9.3161 20 12 20C14.6839 20 17.1344 20.3776 19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 12V20M6 12V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ChefHatIcon;
