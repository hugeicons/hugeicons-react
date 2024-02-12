import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinTargetIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinTargetIcon = (props: BitcoinTargetIconProps) => {
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
        <path d="M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinTargetIcon;
