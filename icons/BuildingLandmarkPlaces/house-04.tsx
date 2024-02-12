import * as React from "react";
import type { SVGProps } from "react";

interface House04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const House04Icon = (props: House04IconProps) => {
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
        <path d="M7 9L11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 8V20M20.5 20V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="3.5" cy="12" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 14V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20V15.9997C12 15.0571 12 14.5858 12.2929 14.2929C12.5858 14 13.0572 14 14 14H15C15.9428 14 16.4142 14 16.7071 14.2929C17 14.5858 17 15.0572 17 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 11H15.5M13.5 8H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default House04Icon;
