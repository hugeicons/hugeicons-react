import * as React from "react";
import type { SVGProps } from "react";

interface Blockchain02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Blockchain02Icon = (props: Blockchain02IconProps) => {
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
        <path d="M12 22C12.2443 22 12.4714 21.8869 12.9256 21.6608L16.5766 19.8432C18.1922 19.039 19 18.6368 19 18V10M12 22C11.7557 22 11.5286 21.8869 11.0744 21.6608L7.42337 19.8432C5.80779 19.039 5 18.6368 5 18V10M12 22V14M19 10C19 9.36317 18.1922 8.96103 16.5766 8.15675L12.9256 6.33919C12.4714 6.11306 12.2443 6 12 6C11.7557 6 11.5286 6.11306 11.0744 6.33919L7.42337 8.15675C5.80779 8.96103 5 9.36317 5 10M19 10C19 10.6368 18.1922 11.039 16.5766 11.8432L12.9256 13.6608C12.4714 13.8869 12.2443 14 12 14M5 10C5 10.6368 5.80779 11.039 7.42337 11.8432L11.0744 13.6608C11.5286 13.8869 11.7557 14 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 21L19 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21L5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Blockchain02Icon;
