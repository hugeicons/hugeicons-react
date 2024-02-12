import * as React from "react";
import type { SVGProps } from "react";

interface Exchange02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Exchange02Icon = (props: Exchange02IconProps) => {
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
        <path d="M4.125 9.5L4.125 3.5M6 3.5V2M6 11V9.5M4.125 6.5H7.875M7.875 6.5C8.49632 6.5 9 7.00368 9 7.625V8.375C9 8.99632 8.49632 9.5 7.875 9.5H3M7.875 6.5C8.49632 6.5 9 5.99632 9 5.375V4.625C9 4.00368 8.49632 3.5 7.875 3.5H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 17.5L18 13L21 17.5M15 17.5L18 22L21 17.5M15 17.5L18 18.625L21 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5C14.8284 5 17.2426 5 18.1213 5.7988C19 6.5976 19 7.4287 19 10L17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19C9.17157 19 6.75736 19 5.87868 18.2012C5 17.4024 5 16.5713 5 14L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Exchange02Icon;
