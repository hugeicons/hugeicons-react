import * as React from "react";
import type { SVGProps } from "react";

interface CursorEdit02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorEdit02Icon = (props: CursorEdit02IconProps) => {
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
        <path d="M16 3C16 2.5286 16 2.29289 15.8536 2.14645C15.7071 2 15.4714 2 15 2H14C13.5286 2 13.2929 2 13.1464 2.14645C13 2.29289 13 2.5286 13 3V4C13 4.4714 13 4.70711 13.1464 4.85355C13.2929 5 13.5286 5 14 5H15C15.4714 5 15.7071 5 15.8536 4.85355C16 4.70711 16 4.4714 16 4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.33325 8.40742C9.93815 6.67911 22.01 10.9129 22 12.4586C21.9887 14.2115 17.2856 14.7507 15.982 15.1165C15.1981 15.3364 14.9882 15.5618 14.8074 16.3838C13.9888 20.1067 13.5778 21.9583 12.6411 21.9997C11.148 22.0657 6.76701 10.0941 8.33325 8.40742Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 3C5 2.5286 5 2.29289 4.85355 2.14645C4.70711 2 4.4714 2 4 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H4C4.4714 5 4.70711 5 4.85355 4.85355C5 4.70711 5 4.4714 5 4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 14C5 13.5286 5 13.2929 4.85355 13.1464C4.70711 13 4.4714 13 4 13H3C2.5286 13 2.29289 13 2.14645 13.1464C2 13.2929 2 13.5286 2 14V15C2 15.4714 2 15.7071 2.14645 15.8536C2.29289 16 2.5286 16 3 16H4C4.4714 16 4.70711 16 4.85355 15.8536C5 15.7071 5 15.4714 5 15V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.5 13V5M13 3.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorEdit02Icon;
