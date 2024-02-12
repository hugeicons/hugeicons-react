import * as React from "react";
import type { SVGProps } from "react";

interface MouseLeftClick02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MouseLeftClick02Icon = (props: MouseLeftClick02IconProps) => {
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
        <path d="M10 2.09084C10.6655 2.02383 11.3389 2 12 2C12.9247 2 13.8373 2.07762 14.7349 2.1882C17.1758 2.48893 19.0694 4.51965 19.2593 6.91118C19.3909 8.56832 19.5 10.268 19.5 12C19.5 13.732 19.3909 15.4317 19.2593 17.0888C19.0694 19.4803 17.1758 21.511 14.7349 21.8118C13.8373 21.9223 12.9247 22 12 22C11.0752 22 10.1626 21.9223 9.26502 21.8118C6.82417 21.511 4.93047 19.4803 4.74061 17.0888C4.60903 15.4317 4.5 13.732 4.5 12C4.5 11.3283 4.5164 10.6614 4.54415 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MouseLeftClick02Icon;
