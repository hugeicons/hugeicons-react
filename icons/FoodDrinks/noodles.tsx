import * as React from "react";
import type { SVGProps } from "react";

interface NoodlesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NoodlesIcon = (props: NoodlesIconProps) => {
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
        <path d="M18 12C18 10.6193 16.8807 9.5 15.5 9.5C14.1193 9.5 13 10.6193 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 3V12M8.5 2.5V7.5M11 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4.5L6 4.1875M20 2L13.5 3.01562M4 7L6 6.875M20 6L13.5 6.40625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.91145 12H19.0886C20.6914 12 21.2786 12.3707 20.8787 13.9821C20.1733 16.8246 18.1759 17.5306 16.3304 19.3859C15.8819 19.8369 16.5798 20.5032 16.5802 20.9992C16.5809 21.933 15.6928 22 14.9854 22H9.0146C8.30717 22 7.41908 21.933 7.41982 20.9992C7.4202 20.5137 8.0972 19.8159 7.66957 19.3859C5.82407 17.5306 3.82674 16.8246 3.12128 13.9821C2.72136 12.3707 3.30857 12 4.91145 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NoodlesIcon;
