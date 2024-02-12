import * as React from "react";
import type { SVGProps } from "react";

interface SecurityPasswordIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecurityPasswordIcon = (props: SecurityPasswordIconProps) => {
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
        <path d="M2.5 9C2.53045 8.19543 2.6201 7.37669 2.76932 6.55013C2.8806 5.93375 2.93623 5.62556 3.12624 5.41465C3.31624 5.20374 3.78574 5.05413 4.72473 4.7549C7.03407 4.01899 8.98673 2 11.9982 2C15.0099 2 16.9647 4.01915 19.275 4.75499C20.2139 5.05405 20.6834 5.20358 20.8734 5.41449C21.0635 5.6254 21.1191 5.93364 21.2305 6.55013C21.3797 7.37669 21.4695 8.19543 21.5 9M19.4451 17C18.125 19.0226 16.1772 20.6375 13.6147 21.6175C12.9478 21.8725 12.6143 22 12.0015 22C11.3887 22 11.0553 21.8725 10.3883 21.6175C7.82558 20.6375 5.87726 19.0227 4.55666 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 12L9.5 13M9.5 13L10.5 14M9.5 13L10.5 12M9.5 13L8.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 12L4.5 13M4.5 13L5.5 14M4.5 13L5.5 12M4.5 13L3.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 12L14.5 13M14.5 13L15.5 14M14.5 13L15.5 12M14.5 13L13.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 12L19.5 13M19.5 13L20.5 14M19.5 13L20.5 12M19.5 13L18.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SecurityPasswordIcon;
