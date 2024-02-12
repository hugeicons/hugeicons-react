import * as React from "react";
import type { SVGProps } from "react";

interface KidneysIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KidneysIcon = (props: KidneysIconProps) => {
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
        <path d="M9.98569 6C10.1429 4.59395 9.00462 3 6.57147 3C4.04678 3 2.00011 5.46243 2.00011 8.5C2.00011 11.5376 3.53899 14 6.06368 14C7.68007 14 8.53563 12.7459 8.3559 11.6589" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8C8.50006 7.9996 10.4999 8.4957 10.4999 11.64C10.4999 15.8 8.49942 17.36 10.0005 21M17 8C15.4999 7.9996 13.5001 8.4957 13.5001 11.64C13.5001 15.8 15.5006 17.36 13.9995 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.61035 6C6.81406 6.57143 7.16038 7.94286 6.91592 8.85714C6.81407 9.2381 6.48829 10 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0143 6C13.8571 4.59395 14.9954 3 17.4285 3C19.9532 3 21.9999 5.46243 21.9999 8.5C21.9999 11.5376 20.461 14 17.9363 14C16.2405 14 15.3821 12.6196 15.6781 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.3897 6C17.1859 6.57143 16.8396 7.94286 17.0841 8.85714C17.1859 9.2381 17.5117 10 18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default KidneysIcon;
