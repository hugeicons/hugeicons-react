import * as React from "react";
import type { SVGProps } from "react";

interface LicenseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicenseIcon = (props: LicenseIconProps) => {
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
        <path d="M12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.7595 20.8284C18.519 22 16.5225 22 12.5294 22H11.4706C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LicenseIcon;
