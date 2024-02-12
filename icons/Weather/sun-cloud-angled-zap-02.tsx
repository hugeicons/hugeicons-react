import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudAngledZap02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudAngledZap02Icon = (props: SunCloudAngledZap02IconProps) => {
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
        <path d="M12.5784 15L10.8043 17.6838C10.5668 18.0431 10.4481 18.2227 10.5217 18.3614C10.5952 18.5 10.8093 18.5 11.2375 18.5H12.7625C13.1907 18.5 13.4048 18.5 13.4783 18.6386C13.5519 18.7773 13.4332 18.9569 13.1957 19.3162L11.4216 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8251 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.419 3.71776 19.512 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudAngledZap02Icon;
