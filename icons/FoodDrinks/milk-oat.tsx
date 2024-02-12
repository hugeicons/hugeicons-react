import * as React from "react";
import type { SVGProps } from "react";

interface MilkOatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MilkOatIcon = (props: MilkOatIconProps) => {
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
        <path d="M20.6401 20.6359C22.1696 19.107 22.7172 17.1757 20.6401 15.0996C18.563 13.0234 15.1013 12.3314 13.7165 13.7155M20.6401 20.6359C19.1105 22.1647 17.1783 22.712 15.1013 20.6359C13.0241 18.5597 12.3318 15.0996 13.7165 13.7155M20.6401 20.6359L13.7165 13.7155" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.942 21.9985H8.00128M4.98572 4.94586L2.56186 7.45742C2.20205 7.83025 2.00098 8.32816 2.00098 8.84629V19.9985C2.00098 21.103 2.89641 21.9985 4.00097 21.9985H8.00128M4.98572 4.94586L8.00128 8.0386M4.98572 4.94586V3.50171C4.98572 2.67328 5.65729 2.00171 6.48572 2.00171H14.0391C14.8794 2.00171 15.5558 2.69197 15.5388 3.53213L15.5178 4.5655C15.513 4.80149 15.5919 5.03157 15.7404 5.21502L18.0264 8.0386M8.00128 8.0386V21.9985M8.00128 8.0386H18.0264M18.0264 8.0386V10.4828" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MilkOatIcon;
