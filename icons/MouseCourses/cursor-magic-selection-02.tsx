import * as React from "react";
import type { SVGProps } from "react";

interface CursorMagicSelection02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorMagicSelection02Icon = (props: CursorMagicSelection02IconProps) => {
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
        <path d="M9.02968 3.5V2M5 5L4 4M3.5 9.02975H2M5 13L4 14M14 4L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.33325 8.40742C9.93815 6.67911 22.01 10.9129 22 12.4586C21.9887 14.2115 17.2856 14.7507 15.982 15.1165C15.1981 15.3364 14.9882 15.5618 14.8074 16.3838C13.9888 20.1067 13.5778 21.9583 12.6411 21.9997C11.148 22.0657 6.76701 10.0941 8.33325 8.40742Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorMagicSelection02Icon;
