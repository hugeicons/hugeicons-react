import * as React from "react";
import type { SVGProps } from "react";

interface Road01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Road01Icon = (props: Road01IconProps) => {
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
        <path d="M5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.17157 20.8284M5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157M5.17157 3.17157C5.17157 3.17157 5.17157 3.17157 5.17157 3.17157ZM5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284M5.17157 20.8284C5.17157 20.8284 5.17157 20.8284 5.17157 20.8284ZM18.8284 20.8284C20 19.6569 20 17.7712 20 14L20 10C20 6.22876 20 4.34315 18.8284 3.17157M18.8284 20.8284C18.8284 20.8284 18.8284 20.8284 18.8284 20.8284ZM18.8284 3.17157C18.8284 3.17157 18.8284 3.17157 18.8284 3.17157Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 11L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5.5L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16.5L12 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Road01Icon;
