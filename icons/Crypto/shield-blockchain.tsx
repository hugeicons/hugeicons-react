import * as React from "react";
import type { SVGProps } from "react";

interface ShieldBlockchainIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShieldBlockchainIcon = (props: ShieldBlockchainIconProps) => {
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
        <path d="M12 16C12.1396 16 12.2694 15.9364 12.5289 15.8092L14.6152 14.7868C15.5384 14.3344 16 14.1082 16 13.75V9.25M12 16C11.8604 16 11.7306 15.9364 11.4711 15.8092L9.38478 14.7868C8.4616 14.3344 8 14.1082 8 13.75V9.25M12 16V11.5M16 9.25C16 8.89179 15.5384 8.66558 14.6152 8.21317L12.5289 7.19079C12.2694 7.0636 12.1396 7 12 7C11.8604 7 11.7306 7.0636 11.4711 7.19079L9.38478 8.21317C8.46159 8.66558 8 8.89179 8 9.25M16 9.25C16 9.60821 15.5384 9.83442 14.6152 10.2868L12.5289 11.3092C12.2694 11.4364 12.1396 11.5 12 11.5M8 9.25C8 9.60821 8.46159 9.83442 9.38478 10.2868L11.4711 11.3092C11.7306 11.4364 11.8604 11.5 12 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShieldBlockchainIcon;
