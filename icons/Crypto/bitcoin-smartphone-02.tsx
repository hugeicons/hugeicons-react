import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinSmartphone02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinSmartphone02Icon = (props: BitcoinSmartphone02IconProps) => {
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
        <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4375 12.6667L10.4375 7.33333M12 7.33333V6M12 14V12.6667M10.4375 10H13.5625M13.5625 10C14.0803 10 14.5 10.4477 14.5 11V11.6667C14.5 12.219 14.0803 12.6667 13.5625 12.6667H9.5M13.5625 10C14.0803 10 14.5 9.55228 14.5 9V8.33333C14.5 7.78105 14.0803 7.33333 13.5625 7.33333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinSmartphone02Icon;
