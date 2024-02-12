import * as React from "react";
import type { SVGProps } from "react";

interface MobileNavigator02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MobileNavigator02Icon = (props: MobileNavigator02IconProps) => {
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
        <path d="M4 9C4 5.70017 4 4.05025 5.17157 3.02513C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.02513C20 4.05025 20 5.70017 20 9V15C20 18.2998 20 19.9497 18.8284 20.9749C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.9749C4 19.9497 4 18.2998 4 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 10H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6.5C13.8941 6.5 15.5 8.11319 15.5 10.0703C15.5 12.0586 13.868 13.4539 12.3605 14.4027C12.2506 14.4665 12.1264 14.5 12 14.5C11.8736 14.5 11.7494 14.4665 11.6395 14.4027C10.1348 13.4446 8.5 12.0655 8.5 10.0703C8.5 8.11319 10.1059 6.5 12 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MobileNavigator02Icon;
