import * as React from "react";
import type { SVGProps } from "react";

interface DiscordIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DiscordIcon = (props: DiscordIconProps) => {
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
        <path d="M7 7C10.8889 5.66667 13.1111 5.66667 17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17C10.5 18.3333 13.5 18.3333 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.85703 17.625C8.85703 18.75 6.73605 21 6.19206 21C4.55894 21 3.10868 19.1246 2.38298 17.625C1.65728 15.7496 1.83899 11.0629 4.01495 4.6875C5.60121 3.54562 7.19433 3.18 8.85716 3L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.143 17.625C15.143 18.75 17.2639 21 17.8079 21C19.4411 21 20.8913 19.1246 21.617 17.625C22.3427 15.7496 22.161 11.0629 19.985 4.6875C18.3988 3.54562 16.8057 3.18 15.1428 3L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.51009 12H7.5M16.5 12H16.4899" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DiscordIcon;
