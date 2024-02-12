import * as React from "react";
import type { SVGProps } from "react";

interface LegalHammerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LegalHammerIcon = (props: LegalHammerIconProps) => {
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
        <path d="M11.9983 2.00012C9.14883 2.00012 7.30123 4.01911 5.11615 4.75502C4.22768 5.05425 3.78345 5.20387 3.60366 5.41477C3.42388 5.62568 3.37124 5.93387 3.26595 6.55026C2.13925 13.1461 4.6019 19.2441 10.475 21.6176C11.106 21.8726 11.4216 22.0001 12.0014 22.0001C12.5812 22.0001 12.8967 21.8726 13.5277 21.6176C19.4005 19.2441 21.8608 13.1461 20.7338 6.55025C20.6284 5.93376 20.5758 5.62552 20.3959 5.41461C20.2161 5.2037 19.7719 5.05417 18.8835 4.75511C16.6976 4.01927 14.8479 2.00012 11.9983 2.00012Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.8333 12.1667C12.8883 13.2216 14.2778 14.2937 14.2778 14.2937L16.1825 12.3889C16.1825 12.3889 15.1105 10.9994 14.0556 9.94444C13.0006 8.8895 11.6111 7.81746 11.6111 7.81746L9.70635 9.72222C9.70635 9.72222 10.7784 11.1117 11.8333 12.1667ZM11.8333 12.1667L8.5 15.5M16.5 12.0714L13.9603 14.6111M11.9286 7.5L9.38889 10.0397" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LegalHammerIcon;
