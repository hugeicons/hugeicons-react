import * as React from "react";
import type { SVGProps } from "react";

interface Lamp01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Lamp01Icon = (props: Lamp01IconProps) => {
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
        <path d="M12 7C8.68629 7 6 9.68629 6 13L18 13C18 9.68629 15.3137 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 13H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0002 20V22M15 19L17 20.4999M9 19L7 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Lamp01Icon;
