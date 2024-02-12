import * as React from "react";
import type { SVGProps } from "react";

interface Quran03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Quran03Icon = (props: Quran03IconProps) => {
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
        <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.9336 10.9999C14.3683 11.9382 13.3396 12.5657 12.1644 12.5657C10.3801 12.5657 8.93359 11.1192 8.93359 9.3349C8.93359 8.15968 9.56109 7.13101 10.4993 6.56567" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 8H13.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 19.5V5.5C3.5 3.567 5.067 2 7 2H17C18.933 2 20.5 3.567 20.5 5.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Quran03Icon;
