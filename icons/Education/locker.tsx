import * as React from "react";
import type { SVGProps } from "react";

interface LockerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LockerIcon = (props: LockerIconProps) => {
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
        <path d="M2 11C2 6.75736 2 4.63604 3.17157 3.31802C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.31802C22 4.63604 22 6.75736 22 11C22 15.2426 22 17.364 20.8284 18.682C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.682C2 17.364 2 15.2426 2 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20V22M18 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 13V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 13V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7H22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default LockerIcon;
