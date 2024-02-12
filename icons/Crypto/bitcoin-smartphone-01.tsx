import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinSmartphone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinSmartphone01Icon = (props: BitcoinSmartphone01IconProps) => {
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
        <path d="M17.5988 5C17.4638 4.13105 17.2083 3.5086 16.7249 3.02513C15.6997 2 14.0498 2 10.75 2C7.45017 2 5.80025 2 4.77513 3.02513C3.75 4.05025 3.75 5.70017 3.75 9V15C3.75 18.2998 3.75 19.9497 4.77513 20.9749C5.80025 22 7.45017 22 10.75 22C14.0498 22 15.6997 22 16.7249 20.9749C17.2083 20.4914 17.4638 19.869 17.5988 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.1875 14.6667L16.1875 9.33333M17.75 9.33333V8M17.75 16V14.6667M16.1875 12H19.3125M19.3125 12C19.8303 12 20.25 12.4477 20.25 13V13.6667C20.25 14.219 19.8303 14.6667 19.3125 14.6667H15.25M19.3125 12C19.8303 12 20.25 11.5523 20.25 11V10.3333C20.25 9.78105 19.8303 9.33333 19.3125 9.33333H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.75 19H10.759" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.75 5H11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinSmartphone01Icon;
