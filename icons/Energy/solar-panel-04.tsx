import * as React from "react";
import type { SVGProps } from "react";

interface SolarPanel04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarPanel04Icon = (props: SolarPanel04IconProps) => {
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
        <path d="M8.5 9H7.73252C6.63802 9 6.09077 9 5.67127 9.33389C5.25177 9.66778 5.05962 10.2563 4.67531 11.4333L3.85904 13.9333C3.10748 16.2351 2.7317 17.386 3.21864 18.193C3.70558 19 4.7758 19 6.91624 19H17.0838C19.2242 19 20.2944 19 20.7814 18.193C21.2683 17.386 20.8925 16.2351 20.141 13.9333L19.3247 11.4333C18.9404 10.2563 18.7482 9.66778 18.3287 9.33389C17.9092 9 17.362 9 16.2675 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11.5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 14H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19V22M12 22H14M12 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 2L10 5.5H14L11.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarPanel04Icon;
