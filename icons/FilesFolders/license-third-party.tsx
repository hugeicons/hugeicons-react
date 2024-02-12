import * as React from "react";
import type { SVGProps } from "react";

interface LicenseThirdPartyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicenseThirdPartyIcon = (props: LicenseThirdPartyIconProps) => {
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
        <path d="M10.4706 22C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14L2 10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2L11.5294 2C15.5225 2 17.519 2 18.7595 3.17157C20 4.34315 20 6.22876 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 22C15.8385 19.2518 20.1188 19.1018 22 22M20 14.9287C20 15.9939 19.1046 16.8574 18 16.8574C16.8954 16.8574 16 15.9939 16 14.9287C16 13.8635 16.8954 13 18 13C19.1046 13 20 13.8635 20 14.9287Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LicenseThirdPartyIcon;
