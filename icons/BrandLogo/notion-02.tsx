import * as React from "react";
import type { SVGProps } from "react";

interface Notion02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Notion02Icon = (props: Notion02IconProps) => {
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
        <path d="M2.5 3.5L16.5 2.5L21.5 5.5M2.5 3.5L6.5 6.5M2.5 3.5V16.5L6.5 21.5M21.5 5.5L6.5 6.5M21.5 5.5V19.5L6.5 21.5M6.5 6.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4704 17.7041L9.5 18.1002M18.5 8.7002L16.2654 8.84917M17.5 8.76686V17.0002L11.7148 9.15254L9.5 9.3002M11 9.2002V17.7002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Notion02Icon;
