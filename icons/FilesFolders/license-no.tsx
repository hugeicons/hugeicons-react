import * as React from "react";
import type { SVGProps } from "react";

interface LicenseNoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicenseNoIcon = (props: LicenseNoIconProps) => {
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
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.5 7L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 12H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.78651 4C3 5.1805 3 6.99964 3 10.1885L3 14.1257C3 17.8377 3 19.6937 4.24049 20.8468C5.48098 22 7.47751 22 11.4706 22H12.5294C16.5225 22 18.519 22 19.7595 20.8468C19.8455 20.7669 19.9255 20.6836 20 20.5965" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.9804 16.5C21 15.7729 21 14.9458 21 14V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2L11.4706 2C9.28206 2 7.69327 2 6.5 2.19289" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LicenseNoIcon;
