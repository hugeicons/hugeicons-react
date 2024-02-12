import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudAngledRainZap02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudAngledRainZap02Icon = (props: SunCloudAngledRainZap02IconProps) => {
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
        <path d="M9.0784 15L7.30434 17.6838C7.06684 18.0431 6.94808 18.2227 7.02165 18.3614C7.09522 18.5 7.30931 18.5 7.73747 18.5H9.26253C9.69069 18.5 9.90478 18.5 9.97835 18.6386C10.0519 18.7773 9.93316 18.9569 9.69566 19.3162L7.9216 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20L15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 20L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 17.2532 20.7478 18.8925 19 19.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.4433 2.78555 17.8716 4 18.7687M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudAngledRainZap02Icon;
