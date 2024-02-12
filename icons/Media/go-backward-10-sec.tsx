import * as React from "react";
import type { SVGProps } from "react";

interface GoBackward10SecIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoBackward10SecIcon = (props: GoBackward10SecIconProps) => {
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
        <path d="M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.99219 11.0036C8.52019 10.5836 9.00019 9.891 9.30019 10.0196C9.60019 10.1481 9.50419 10.5716 9.50419 11.2316C9.50419 11.8916 9.50419 14.6843 9.50419 16.0076" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.0022 12.5999C16.0022 11.2199 16.0682 10.8479 15.8042 10.4039C15.5402 9.95986 14.8802 9.99826 14.2202 9.99826C13.5602 9.99826 13.0802 9.95986 12.7622 10.3199C12.3722 10.7399 12.5402 11.5199 12.4922 12.5999C12.6002 14.0399 12.3062 15.1799 12.7562 15.6599C13.0802 16.0559 13.6553 15.9959 14.3402 16.0079C15.0201 15.9996 15.4322 16.0319 15.7682 15.6479C16.1402 15.3119 15.9602 13.9799 16.0022 12.5999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GoBackward10SecIcon;
