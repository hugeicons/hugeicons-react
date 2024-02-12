import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinShieldIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinShieldIcon = (props: BitcoinShieldIconProps) => {
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
        <path d="M11.9983 2C9.14883 2 7.30123 4.01899 5.11615 4.7549C4.22768 5.05413 3.78345 5.20374 3.60366 5.41465C3.42388 5.62556 3.37124 5.93375 3.26595 6.55013C2.13925 13.146 4.6019 19.244 10.475 21.6175C11.106 21.8725 11.4216 22 12.0014 22C12.5812 22 12.8967 21.8725 13.5277 21.6175C19.4005 19.2439 21.8608 13.146 20.7338 6.55013C20.6284 5.93364 20.5758 5.6254 20.3959 5.41449C20.2161 5.20358 19.7719 5.05405 18.8835 4.75499C16.6976 4.01915 14.8479 2 11.9983 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.125 14.5L10.125 8.5M12 8.5V7M12 16V14.5M10.125 11.5H13.875M13.875 11.5C14.4963 11.5 15 12.0037 15 12.625V13.375C15 13.9963 14.4963 14.5 13.875 14.5H9M13.875 11.5C14.4963 11.5 15 10.9963 15 10.375V9.625C15 9.00368 14.4963 8.5 13.875 8.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinShieldIcon;
