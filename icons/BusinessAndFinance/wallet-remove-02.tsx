import * as React from "react";
import type { SVGProps } from "react";

interface WalletRemove02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WalletRemove02Icon = (props: WalletRemove02IconProps) => {
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
        <path d="M10 16L4 22M10 22L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12.5V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C14.3572 21.7419 13.6846 21.666 13 21.5762" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WalletRemove02Icon;
