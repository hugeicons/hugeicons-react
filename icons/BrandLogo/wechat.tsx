import * as React from "react";
import type { SVGProps } from "react";

interface WechatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WechatIcon = (props: WechatIconProps) => {
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
        <path d="M7 7H7.00897M12.991 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.991 14.5H18M14 14.5H14.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16C10 18.7614 12.6863 21 16 21C16.9072 21 17.7673 20.8322 18.5382 20.5319C18.7266 20.4585 18.9312 20.4321 19.13 20.4689L22 21L21.3483 18.9702C21.2531 18.6738 21.3075 18.3533 21.4575 18.0805C21.8058 17.447 22 16.7424 22 16C22 13.2386 19.3137 11 16 11C12.6863 11 10 13.2386 10 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.8731 11.2485C17.9565 10.8434 18 10.4261 18 10C18 6.13401 14.4183 3 10 3C5.58172 3 2 6.13401 2 10C2 11.1124 2.29653 12.1641 2.8242 13.0981C2.97102 13.358 3.01971 13.6653 2.93243 13.9507L2 17L5.91414 16.2394C6.12183 16.199 6.33621 16.2273 6.53119 16.3094C7.61561 16.7662 8.84138 17.0157 10.1198 16.9992" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WechatIcon;
