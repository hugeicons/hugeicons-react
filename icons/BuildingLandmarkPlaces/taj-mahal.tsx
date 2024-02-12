import * as React from "react";
import type { SVGProps } from "react";

interface TajMahalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TajMahalIcon = (props: TajMahalIconProps) => {
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
        <path d="M16 22V11M8 11V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.28121 11C4.4246 7 10.3473 5 12 3C13.6528 5 19.5754 7 15.7188 11H8.28121Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.4945 12C23.1153 9.27273 19.8882 8.03306 18.9863 7C18.6041 7.4379 17 8 17 8.5M19 7V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.50553 12C0.884678 9.27273 4.11179 8.03306 5.01367 7C5.39592 7.4379 7 8 7 8.5M5 7V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11L4.32647 12.347C3.77285 12.55 3.21234 12.65 2.61972 12.65C2.23545 12.65 2 12.8576 2 13.2697V22H22V13.2697C22 12.8576 21.7646 12.65 21.3803 12.65C20.7877 12.65 20.2272 12.55 19.6735 12.347L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 18L19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 22L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 18L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TajMahalIcon;
