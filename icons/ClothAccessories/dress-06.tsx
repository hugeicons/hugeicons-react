import * as React from "react";
import type { SVGProps } from "react";

interface Dress06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dress06Icon = (props: Dress06IconProps) => {
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
        <path d="M5.17736 9.03223C8.90312 12.6691 3.12493 17.3688 5.6574 20.563C7.05911 22.331 16.7295 22.6215 18.3615 20.563C20.8927 17.3705 15.1293 12.6763 18.8416 9.03223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.35531 13C4.08976 12.791 2.24317 11.3282 2.01008 9.23853C1.97692 8.9413 2.02708 8.64273 2.13808 8.36431C2.85289 6.57132 4.85232 3.53054 7.91642 2.04751C8.12532 1.9464 8.37469 2.01201 8.51635 2.19362C9.27591 3.1674 10.5845 4.6846 12 4.6846C13.4155 4.6846 14.7241 3.1674 15.4836 2.19362C15.6253 2.01201 15.8747 1.9464 16.0836 2.04751C19.1477 3.53054 21.1471 6.57132 21.8619 8.36431C21.9729 8.64273 22.0231 8.9413 21.9899 9.23853C21.7568 11.3282 19.9297 12.7881 17.6641 12.9972" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dress06Icon;
