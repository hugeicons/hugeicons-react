import * as React from "react";
import type { SVGProps } from "react";

interface MoreOrLessCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoreOrLessCircleIcon = (props: MoreOrLessCircleIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.5032 9.30152L9.46318 9.30167C8.4767 9.30167 7.64254 9.34937 7.51979 9.01499C7.42402 8.75401 7.91977 8.1 8.39977 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.50465 14.6985L14.5446 14.6983C15.5311 14.6983 16.3653 14.6506 16.488 14.985C16.5838 15.246 16.088 15.9 15.608 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoreOrLessCircleIcon;
