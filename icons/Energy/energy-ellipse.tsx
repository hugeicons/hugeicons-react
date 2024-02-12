import * as React from "react";
import type { SVGProps } from "react";

interface EnergyEllipseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EnergyEllipseIcon = (props: EnergyEllipseIconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.12901 11.5977L12.128 6.20791C12.4408 5.78638 13.027 6.04874 13.027 6.61024V10.782C13.027 11.1183 13.2569 11.391 13.5405 11.391H15.4855C15.9274 11.391 16.1629 12.0089 15.871 12.4023L11.872 17.7921C11.5592 18.2136 10.973 17.9513 10.973 17.3898V13.218C10.973 12.8817 10.7431 12.609 10.4595 12.609H8.51449C8.07264 12.609 7.83711 11.9911 8.12901 11.5977Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EnergyEllipseIcon;
