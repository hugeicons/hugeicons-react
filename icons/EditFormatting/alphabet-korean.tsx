import * as React from "react";
import type { SVGProps } from "react";

interface AlphabetKoreanIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphabetKoreanIcon = (props: AlphabetKoreanIconProps) => {
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
        <path d="M5 6H11.1554C12.0231 6 12.4569 6 12.7534 6.31741C13.0498 6.63483 13.0234 7.02125 12.9707 7.79408C12.7255 11.3825 10.8793 17.0157 5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3V12M16 21V12M16 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AlphabetKoreanIcon;
