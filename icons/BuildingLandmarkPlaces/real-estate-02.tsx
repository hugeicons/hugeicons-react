import * as React from "react";
import type { SVGProps } from "react";

interface RealEstate02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RealEstate02Icon = (props: RealEstate02IconProps) => {
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
        <path d="M21 22V7.4849C21 6.38738 21 5.83862 20.6845 5.37551C20.3689 4.9124 19.7876 4.608 18.6251 3.99921L17.1459 3.22461C15.3209 2.26893 14.4084 1.7911 13.7042 2.08712C13 2.38315 13 3.24459 13 4.96746V9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 8H19M21 11H19M21 14H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 13H12.5M11.5 16H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="3.5" cy="14" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RealEstate02Icon;
