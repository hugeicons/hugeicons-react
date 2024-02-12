import * as React from "react";
import type { SVGProps } from "react";

interface DropperIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DropperIcon = (props: DropperIconProps) => {
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
        <path d="M11.2872 8L4.68174 14.6055C4.05287 15.2344 3.72789 16.052 3.70679 16.876C3.67836 17.986 3.66415 18.5409 3.57991 18.7372C3.49566 18.9334 3.30358 19.1255 2.91944 19.5096L2.32535 20.1037C1.89155 20.5375 1.89155 21.2409 2.32535 21.6747C2.75915 22.1084 3.46247 22.1084 3.89627 21.6747L4.49036 21.0806C4.87451 20.6964 5.06658 20.5043 5.26283 20.4201C5.45909 20.3358 6.01406 20.3216 7.12396 20.2932C7.94797 20.2721 8.76565 19.9471 9.39451 19.3183L11.3227 17.3901M14.4291 14.2837L16 12.7128M14.4291 14.2837L12.8582 12.7128M14.4291 14.2837L11.3227 17.3901M11.3227 17.3901L9.75177 15.8192" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.068 7.43213L19.5002 8.99992C18.6718 9.82837 18.6718 11.1715 19.5002 12L12 4.49979C12.8285 5.32824 14.1716 5.32824 15.0001 4.49979L16.5679 2.93201C17.8105 1.68933 19.8253 1.68933 21.068 2.93201C22.3107 4.17468 22.3107 6.18946 21.068 7.43213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DropperIcon;
