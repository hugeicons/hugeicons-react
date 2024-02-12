import * as React from "react";
import type { SVGProps } from "react";

interface DivideSignIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DivideSignIcon = (props: DivideSignIconProps) => {
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
        <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.5 18.5C14.5 19.8807 13.3807 21 12 21C10.6193 21 9.5 19.8807 9.5 18.5C9.5 17.1193 10.6193 16 12 16C13.3807 16 14.5 17.1193 14.5 18.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default DivideSignIcon;
