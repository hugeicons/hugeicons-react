import * as React from "react";
import type { SVGProps } from "react";

interface LicenseMaintenanceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicenseMaintenanceIcon = (props: LicenseMaintenanceIconProps) => {
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
        <path d="M11.5294 22H10.4706C6.47751 22 4.48098 22 3.24049 20.8284C2 19.6569 2 17.7712 2 14L2 10C2 6.22876 2 4.34315 3.24049 3.17157C4.48098 2 6.47752 2 10.4706 2L11.5294 2C15.5225 2 17.519 2 18.7595 3.17157C20 4.34315 20 6.22876 20 10V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 20.7143V22M18 20.7143C16.8432 20.7143 15.8241 20.1461 15.2263 19.2833M18 20.7143C19.1568 20.7143 20.1759 20.1461 20.7737 19.2833M18 14.2857C19.1569 14.2857 20.1761 14.854 20.7738 15.7169M18 14.2857C16.8431 14.2857 15.8239 14.854 15.2262 15.7169M18 14.2857V13M22 14.9286L20.7738 15.7169M14.0004 20.0714L15.2263 19.2833M14 14.9286L15.2262 15.7169M21.9996 20.0714L20.7737 19.2833M20.7738 15.7169C21.1273 16.2271 21.3333 16.8403 21.3333 17.5C21.3333 18.1597 21.1272 18.773 20.7737 19.2833M15.2262 15.7169C14.8727 16.2271 14.6667 16.8403 14.6667 17.5C14.6667 18.1597 14.8728 18.773 15.2263 19.2833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LicenseMaintenanceIcon;
