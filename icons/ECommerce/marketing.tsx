import * as React from "react";
import type { SVGProps } from "react";

interface MarketingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MarketingIcon = (props: MarketingIconProps) => {
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
        <ellipse cx="18" cy="10" rx="4" ry="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 2C14.8969 2 8.46512 4.37761 4.77105 5.85372C3.07942 6.52968 2 8.17832 2 10C2 11.8217 3.07942 13.4703 4.77105 14.1463C8.46512 15.6224 14.8969 18 18 18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 22L9.05674 20.9303C6.94097 19.7657 5.74654 17.4134 6.04547 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MarketingIcon;
