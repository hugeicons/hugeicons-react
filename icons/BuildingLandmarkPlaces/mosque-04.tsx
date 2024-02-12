import * as React from "react";
import type { SVGProps } from "react";

interface Mosque04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mosque04Icon = (props: Mosque04IconProps) => {
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
        <path d="M17 22V14C17 12.1144 17 11.1716 16.4142 10.5858C15.8284 10 14.8856 10 13 10H11C9.11438 10 8.17157 10 7.58579 10.5858C7 11.1716 7 12.1144 7 14V22H17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22V12H3V22H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 22V12H21V22H17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.02481 10C5.93952 6 10.6777 4 11.9998 2C13.3221 4 18.0602 6 14.9748 10H9.02481Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22V19C10 18.0218 10 17.5326 10.1422 17.0874C10.2364 16.7924 10.3757 16.5137 10.5552 16.2613C10.8261 15.8804 11.2174 15.5869 12 15C12.7826 15.5869 13.1739 15.8804 13.4448 16.2613C13.6243 16.5137 13.7636 16.7924 13.8578 17.0874C14 17.5326 14 18.0218 14 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mosque04Icon;
