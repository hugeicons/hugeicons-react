import * as React from "react";
import type { SVGProps } from "react";

interface MoneyExchange01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyExchange01Icon = (props: MoneyExchange01IconProps) => {
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
        <path d="M19.3333 14L20.1565 14.7579C20.3357 14.934 20.4253 15.0221 20.3938 15.0969C20.3622 15.1717 20.2355 15.1717 19.9821 15.1717H16.8777C15.2884 15.1717 14 16.438 14 18C14 18.3521 14.0655 18.6891 14.185 19M16.6667 22L15.8435 21.2421C15.6643 21.066 15.5747 20.9779 15.6062 20.9031C15.6378 20.8283 15.7645 20.8283 16.0179 20.8283H19.1223C20.7116 20.8283 22 19.562 22 18C22 17.6479 21.9345 17.3109 21.815 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9913 11.5C22 10.8993 22 10.7355 22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284C4.34315 18 6.22876 18 10 18H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 10H18.491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10H5.49102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 10C14.5 11.3807 13.3807 12.5 12 12.5C10.6193 12.5 9.5 11.3807 9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoneyExchange01Icon;
