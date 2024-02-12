import * as React from "react";
import type { SVGProps } from "react";

interface ShippingCenterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShippingCenterIcon = (props: ShippingCenterIconProps) => {
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
        <rect x="2" y="15" width="20" height="6" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 9C6 6.17157 6 4.75736 6.87868 3.87868C7.75736 3 9.17157 3 12 3C14.8284 3 16.2426 3 17.1213 3.87868C18 4.75736 18 6.17157 18 9C18 11.8284 18 13.2426 17.1213 14.1213C16.2426 15 14.8284 15 12 15C9.17157 15 7.75736 15 6.87868 14.1213C6 13.2426 6 11.8284 6 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9955 18H12.0045M7 18H7.00897M16.991 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 6H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShippingCenterIcon;
