import * as React from "react";
import type { SVGProps } from "react";

interface Hospital01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hospital01Icon = (props: Hospital01IconProps) => {
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
        <path d="M14 2V4M14 4V6M14 4H10M10 2V4M10 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 14H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 10H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 22H9.5M22 22H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Hospital01Icon;
