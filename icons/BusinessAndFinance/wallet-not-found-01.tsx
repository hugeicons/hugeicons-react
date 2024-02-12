import * as React from "react";
import type { SVGProps } from "react";

interface WalletNotFound01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WalletNotFound01Icon = (props: WalletNotFound01IconProps) => {
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
        <path d="M3.47022 4C3.35691 4.08553 3.24988 4.17937 3.14831 4.28231C2 5.44617 2 7.31938 2 11.0658V13.0526C2 16.7991 2 18.6723 3.14831 19.8361C4.29663 21 6.14481 21 9.84118 21H15.7221C17.8139 21 19.1166 21 20 20.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.8653 14.5C18.9521 14.2848 19.0001 14.0483 19.0001 13.8C19.0001 12.8059 18.2305 12 17.2813 12C17 12 16.7346 12.0707 16.5002 12.1961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 7C18 6.07003 18 5.60504 17.8978 5.22354C17.6204 4.18827 16.8118 3.37962 15.7765 3.10222C15.395 3 14.93 3 14 3H10C9.05436 3 8.22726 3 7.50024 3.01847M11.2427 7H16C18.8285 7 20.2427 7 21.1214 7.87868C22 8.75736 22 10.1716 22 13V15C22 15.9959 22 16.8164 21.9617 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default WalletNotFound01Icon;
