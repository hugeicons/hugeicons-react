import * as React from "react";
import type { SVGProps } from "react";

interface ExternalDriveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ExternalDriveIcon = (props: ExternalDriveIconProps) => {
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
        <path d="M20 14V10C20 6.22876 20 4.34315 18.8973 3.17157C17.7947 2 16.02 2 12.4706 2L11.5294 2C7.98001 2 6.20531 2 5.10266 3.17157C4 4.34315 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.10266 20.8284C6.20531 22 7.98001 22 11.5294 22H12.4706C16.02 22 17.7947 22 18.8973 20.8284C20 19.6569 20 17.7712 20 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 18H16.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15L20 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 6L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ExternalDriveIcon;
