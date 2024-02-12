import * as React from "react";
import type { SVGProps } from "react";

interface CoinsBitcoinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CoinsBitcoinIcon = (props: CoinsBitcoinIconProps) => {
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
        <path d="M3.1004 11C2.4033 12.1065 2 13.4168 2 14.8212C2 18.7859 5.21417 22 9.17905 22C10.5834 22 11.8935 21.5968 13 20.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 10H15.5M12 10V6.5H14M12 10V13.5H14M15.5 10C16.3284 10 17 9.2165 17 8.25C17 7.2835 16.3284 6.5 15.5 6.5H14M15.5 10C16.3284 10 17 10.7835 17 11.75C17 12.7165 16.3284 13.5 15.5 13.5H14M14 13.5V14.5M14 6.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CoinsBitcoinIcon;
