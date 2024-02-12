import * as React from "react";
import type { SVGProps } from "react";

interface SolarPanel03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarPanel03Icon = (props: SolarPanel03IconProps) => {
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
        <path d="M9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.307 12H8.69298C7.37533 12 6.7165 12 6.20627 12.3439C5.69603 12.6877 5.45135 13.2966 4.96198 14.5144L4.1583 16.5144C3.15957 18.9998 2.66021 20.2425 3.25788 21.1213C3.85556 22 5.20014 22 7.8893 22H16.1107C18.7999 22 20.1444 22 20.7421 21.1213C21.3398 20.2425 20.8404 18.9998 19.8417 16.5144L19.038 14.5144C18.5487 13.2966 18.304 12.6877 17.7937 12.3439C17.2835 12 16.6247 12 15.307 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 17H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2422 4.7574L16.9493 4.05029" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.0498 4.05029L7.75691 4.7574" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarPanel03Icon;
