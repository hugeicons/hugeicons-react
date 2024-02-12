import * as React from "react";
import type { SVGProps } from "react";

interface EquipmentGym03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EquipmentGym03Icon = (props: EquipmentGym03IconProps) => {
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
        <path d="M7.27653 19H16.7235C17.961 19 18.5797 19 18.8356 18.6974C19.4163 18.0107 18.3038 17.1031 17.8979 16.6456C17.4405 16.1302 17.1059 16 16.4299 16H7.57013C6.89408 16 6.55953 16.1302 6.10214 16.6456C5.69617 17.1031 4.58375 18.0107 5.16444 18.6974C5.42026 19 6.03902 19 7.27653 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8V16M15 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 19V21M8 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EquipmentGym03Icon;
