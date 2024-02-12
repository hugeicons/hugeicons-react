import * as React from "react";
import type { SVGProps } from "react";

interface PatioIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PatioIcon = (props: PatioIconProps) => {
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
        <path d="M22 16C21.6936 15.3871 21.0672 15 20.382 15H3.61803C2.93283 15 2.30643 15.3871 2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 15V22M9.5 15V22M14.5 15V22M19 15V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7L15 3M12 7H6.5M12 7H17.5M12 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V15H6V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PatioIcon;
