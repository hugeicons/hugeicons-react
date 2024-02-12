import * as React from "react";
import type { SVGProps } from "react";

interface RealEstate01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RealEstate01Icon = (props: RealEstate01IconProps) => {
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
        <path d="M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 15H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RealEstate01Icon;
