import * as React from "react";
import type { SVGProps } from "react";

interface WalletDone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WalletDone01Icon = (props: WalletDone01IconProps) => {
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
        <path d="M2 19C2 19 3 19 4 21C4 21 7.17647 16 10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V13C22 10.1716 22 8.75736 21.1213 7.87868C20.2426 7 18.8284 7 16 7H10M2 15V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 13.5C16 14.3284 16.6716 15 17.5 15C18.3284 15 19 14.3284 19 13.5C19 12.6716 18.3284 12 17.5 12C16.6716 12 16 12.6716 16 13.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WalletDone01Icon;
