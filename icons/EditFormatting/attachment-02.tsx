import * as React from "react";
import type { SVGProps } from "react";

interface Attachment02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Attachment02Icon = (props: Attachment02IconProps) => {
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
        <path d="M8 8.00049V6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049V18.0005C16 20.2096 14.2091 22.0005 12 22.0005C9.79086 22.0005 8 20.2096 8 18.0005V13.5005C8 12.1198 9.11929 11.0005 10.5 11.0005C11.8807 11.0005 13 12.1198 13 13.5005V16.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Attachment02Icon;
