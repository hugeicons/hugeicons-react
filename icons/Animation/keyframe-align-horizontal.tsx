import * as React from "react";
import type { SVGProps } from "react";

interface KeyframeAlignHorizontalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KeyframeAlignHorizontalIcon = (props: KeyframeAlignHorizontalIconProps) => {
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
        <path d="M10.8546 8.89114C11.3832 8.29705 11.6475 8 12 8C12.3525 8 12.6168 8.29705 13.1454 8.89114L14.4455 10.3522C15.1485 11.1423 15.5 11.5374 15.5 12C15.5 12.4626 15.1485 12.8577 14.4455 13.6478L13.1454 15.1089C12.6168 15.703 12.3525 16 12 16C11.6475 16 11.3832 15.703 10.8546 15.1089L9.55451 13.6478C8.8515 12.8577 8.5 12.4626 8.5 12C8.5 11.5374 8.8515 11.1423 9.55451 10.3522L10.8546 8.89114Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KeyframeAlignHorizontalIcon;
