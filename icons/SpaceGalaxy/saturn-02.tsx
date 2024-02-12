import * as React from "react";
import type { SVGProps } from "react";

interface Saturn02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Saturn02Icon = (props: Saturn02IconProps) => {
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
        <path d="M22 8.5C22 9.88071 20.8807 11 19.5 11C18.1193 11 17 9.88071 17 8.5C17 7.11929 18.1193 6 19.5 6C20.8807 6 22 7.11929 22 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.63604 18.364C4.00736 16.7353 3 14.4853 3 12C3 7.02944 7.02944 3 12 3C13.6393 3 15.1762 3.43827 16.5 4.20404M8.5 20.2941C9.57589 20.7487 10.7586 21 12 21C16.9706 21 21 16.9706 21 12C21 11.5348 20.9647 11.0778 20.8966 10.6315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.1733 6.38013C22.0683 4.52016 22.2767 3.07297 21.6005 2.39804C20.7268 1.52583 18.5637 2.1307 15.8873 3.78558M18.3049 10.8299C17.2978 12.1189 16.1137 13.459 14.7889 14.784C9.48663 20.087 3.93971 23.1395 2.39946 21.602C1.52229 20.7263 2.13378 18.5508 3.8022 15.8605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Saturn02Icon;
