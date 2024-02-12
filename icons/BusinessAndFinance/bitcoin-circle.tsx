import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinCircleIcon = (props: BitcoinCircleIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12H13.2M9 12V9.2963C9 8.82489 9 8.58919 9.14645 8.44274C9.29289 8.2963 9.5286 8.2963 10 8.2963H13.2C14.1941 8.2963 15 9.1254 15 10.1481C15 11.1709 14.1941 12 13.2 12M9 12V14.7037C9 15.1751 9 15.4108 9.14645 15.5572C9.29289 15.7037 9.5286 15.7037 10 15.7037H13.2C14.1941 15.7037 15 14.8746 15 13.8518C15 12.8291 14.1941 12 13.2 12M10.4938 8.2963V7M10.4938 17V15.7037M12.8982 8.2963V7M12.8982 17V15.7037" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BitcoinCircleIcon;
