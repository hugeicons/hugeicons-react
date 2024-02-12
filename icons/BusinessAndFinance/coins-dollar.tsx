import * as React from "react";
import type { SVGProps } from "react";

interface CoinsDollarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CoinsDollarIcon = (props: CoinsDollarIconProps) => {
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
        <path d="M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.7712 8.20518C15.555 7.29304 14.4546 6.46998 13.1337 7.08573C11.8128 7.70148 11.603 9.68263 13.601 9.89309C14.5041 9.98822 15.0928 9.78271 15.6319 10.364C16.1709 10.9453 16.2711 12.562 14.8931 12.9977C13.5151 13.4333 12.1506 12.7526 12.002 11.7859M13.9862 6.00415V6.87319M13.9862 13.1318V14.0042" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CoinsDollarIcon;
