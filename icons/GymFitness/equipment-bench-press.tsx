import * as React from "react";
import type { SVGProps } from "react";

interface EquipmentBenchPressIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EquipmentBenchPressIcon = (props: EquipmentBenchPressIconProps) => {
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
        <path d="M18 3V8M6 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 4V5.5M20.5 5.5V7M20.5 5.5H22M3.5 4V5.5M3.5 5.5V7M3.5 5.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 5.5L6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5.5V10M14 5.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.9517 16H5.06243M14.2556 10H10.2066C9.19904 10 8.82575 10.1443 8.27172 10.9923L5.25854 15.6043C5.07336 15.8877 5 16.1138 5 16.4581C5 18.6114 5.87314 19 7.8469 19H16.0969C18.1334 19 19 18.6165 19 16.4079C19 16.1018 18.9432 15.8986 18.7957 15.6351L16.2591 11.1056C15.725 10.1518 15.3409 10 14.2556 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 19V21M8 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EquipmentBenchPressIcon;
