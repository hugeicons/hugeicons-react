import * as React from "react";
import type { SVGProps } from "react";

interface PhoneOff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PhoneOff01Icon = (props: PhoneOff01IconProps) => {
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
        <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.9836 18.9959C18.8039 20.9154 17.4166 22.0002 15.4836 22.0002H8.49219C6.55919 22.0002 4.99219 20.4332 4.99219 18.5002L5.09241 5.48584" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.14062 2.27035C7.55637 2.09621 8.01286 2 8.49182 2H15.4833C17.4163 2 18.9833 3.567 18.9833 5.5V15.0051" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PhoneOff01Icon;
