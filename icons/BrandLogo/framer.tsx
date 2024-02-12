import * as React from "react";
import type { SVGProps } from "react";

interface FramerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FramerIcon = (props: FramerIconProps) => {
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
        <path d="M12 9L18 15H6V10C6 9.17267 6.17267 9 7 9H12ZM12 9L6 3H17C17.8273 3 18 3.17267 18 4V8C18 8.82733 17.8273 9 17 9H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 21L6 15H12V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FramerIcon;
