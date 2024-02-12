import * as React from "react";
import type { SVGProps } from "react";

interface ShieldEnergyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShieldEnergyIcon = (props: ShieldEnergyIconProps) => {
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
        <path d="M8.12901 11.1312L12.128 6.19058C12.4408 5.80418 13.027 6.04468 13.027 6.55939V10.3835C13.027 10.6918 13.2569 10.9417 13.5405 10.9417H15.4855C15.9274 10.9417 16.1629 11.5082 15.871 11.8688L11.872 16.8094C11.5592 17.1958 10.973 16.9553 10.973 16.4406V12.6165C10.973 12.3082 10.7431 12.0583 10.4595 12.0583H8.51449C8.07264 12.0583 7.83711 11.4918 8.12901 11.1312Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShieldEnergyIcon;
