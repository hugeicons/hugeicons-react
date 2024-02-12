import * as React from "react";
import type { SVGProps } from "react";

interface RulerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RulerIcon = (props: RulerIconProps) => {
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
        <path d="M17.5 10.5L19.5 12.5M14 14L16 16M10.5 17.5L12.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5355 4.67767C11.9002 3.31296 12.5826 2.6306 13.3438 2.3153C14.3587 1.8949 15.4991 1.8949 16.5141 2.3153C17.2753 2.6306 17.9576 3.31296 19.3223 4.67767C20.687 6.04238 21.3694 6.72474 21.6847 7.48594C22.1051 8.50088 22.1051 9.64126 21.6847 10.6562C21.3694 11.4174 20.687 12.0998 19.3223 13.4645L13.4645 19.3223C12.0998 20.687 11.4174 21.3694 10.6562 21.6847C9.64126 22.1051 8.50088 22.1051 7.48594 21.6847C6.72474 21.3694 6.04238 20.687 4.67767 19.3223C3.31296 17.9576 2.6306 17.2753 2.3153 16.5141C1.8949 15.4991 1.8949 14.3587 2.3153 13.3438C2.6306 12.5826 3.31296 11.9002 4.67767 10.5355L10.5355 4.67767Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RulerIcon;
