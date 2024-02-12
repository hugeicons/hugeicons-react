import * as React from "react";
import type { SVGProps } from "react";

interface ArrowUpRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowUpRight02Icon = (props: ArrowUpRight02IconProps) => {
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
        <path d="M13 11L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowUpRight02Icon;
