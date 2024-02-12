import * as React from "react";
import type { SVGProps } from "react";

interface CursorTextIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorTextIcon = (props: CursorTextIconProps) => {
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
        <path d="M13 17L11.0714 12.5M3 17L4.92857 12.5M4.92857 12.5L7.02295 7.61311C7.21207 7.17183 7.54728 7 8 7C8.45272 7 8.78793 7.17183 8.97705 7.61311L11.0714 12.5M4.92857 12.5H11.0714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.00008C16.8333 2.99261 18 3.50003 18.5 4.50003M18.5 4.50003C19 3.50003 20.1667 3.00005 21 3.00008M18.5 4.50003L18.5 19.5M21 21C20.1667 21.0074 19 20.5 18.5 19.5M18.5 19.5C18 20.5 16.8333 21 16 21M20 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorTextIcon;
