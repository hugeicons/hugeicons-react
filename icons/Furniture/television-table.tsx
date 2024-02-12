import * as React from "react";
import type { SVGProps } from "react";

interface TelevisionTableIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TelevisionTableIcon = (props: TelevisionTableIconProps) => {
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
        <path d="M18 14H6C3.518 14 3 14.518 3 17V19C3 21.482 3.518 22 6 22H18C20.482 22 21 21.482 21 19V17C21 14.518 20.482 14 18 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 7V6C6 4.11438 6 3.17157 6.58579 2.58579C7.17157 2 8.11438 2 10 2H14C15.8856 2 16.8284 2 17.4142 2.58579C18 3.17157 18 4.11438 18 6V7C18 8.88562 18 9.82843 17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142C6 9.82843 6 8.88562 6 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 11L10 14M13.5 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TelevisionTableIcon;
