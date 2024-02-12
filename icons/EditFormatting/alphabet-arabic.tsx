import * as React from "react";
import type { SVGProps } from "react";

interface AlphabetArabicIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphabetArabicIcon = (props: AlphabetArabicIconProps) => {
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
        <path d="M9 4L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 4V17.6667C13 18.7666 13 19.3166 12.7071 19.6583C12.4142 20 11.9428 20 11 20H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 4V17.6667C5 18.7666 5 19.3166 4.70711 19.6583C4.41421 20 3.94281 20 3 20H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AlphabetArabicIcon;
