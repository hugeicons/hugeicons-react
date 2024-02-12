import * as React from "react";
import type { SVGProps } from "react";

interface CapcutIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CapcutIcon = (props: CapcutIconProps) => {
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
        <path d="M9.99826 12L2 16C2 17.8856 2 18.3284 2.58579 18.9142C3.17157 19.5 4.11438 19.5 6 19.5H14C15.8856 19.5 16.8284 19.5 17.4142 18.9142C18 18.3284 18 17.8856 18 16M9.99826 12L21.9957 6M9.99826 12L2 8C2 6.61438 2 5.67157 2.58579 5.08579C3.17157 4.5 4.11438 4.5 6 4.5H14C15.8856 4.5 16.8284 4.5 17.4142 5.08579C18 5.67157 18 6.61438 18 8M9.99826 12L21.9957 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CapcutIcon;
