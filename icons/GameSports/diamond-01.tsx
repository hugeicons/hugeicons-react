import * as React from "react";
import type { SVGProps } from "react";

interface Diamond01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Diamond01Icon = (props: Diamond01IconProps) => {
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
        <path d="M6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2C13.8583 2 14.8907 3.24268 16.9556 5.72803L18.041 7.03437C20.0137 9.4087 21 10.5959 21 12C21 13.4041 20.0137 14.5913 18.041 16.9656L16.9557 18.272C14.8907 20.7573 13.8583 22 12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Diamond01Icon;
