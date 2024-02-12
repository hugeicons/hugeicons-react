import * as React from "react";
import type { SVGProps } from "react";

interface OrangeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OrangeIcon = (props: OrangeIconProps) => {
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
        <path d="M20.5 14C20.5 18.4183 16.6944 22 12 22C7.30558 22 3.5 18.4183 3.5 14C3.5 9.58172 7.30558 6 12 6C16.6944 6 20.5 9.58172 20.5 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6C11.5 4.83333 12 2 6 2C6.33333 3 7 6 12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OrangeIcon;
