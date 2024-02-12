import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinDown02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinDown02Icon = (props: BitcoinDown02IconProps) => {
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
        <path d="M11 9C7.41015 9 4.5 11.9101 4.5 15.5C4.5 19.0898 7.41015 22 11 22C14.5898 22 17.5 19.0899 17.5 15.5C17.5 11.9101 14.5898 9 11 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8.5L15.4116 4.29397C14.7437 3.68176 14.4098 3.37565 14.0084 3.38437C13.6069 3.3931 13.2866 3.71342 12.6459 4.35406L11.6803 5.31973C11.116 5.88402 10.8338 6.16617 10.4728 6.19872C10.1118 6.23127 9.78377 6.00415 9.12764 5.5499L4 2M20 8.5H16.5M20 8.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.4375 18.1667L9.4375 12.8333M11 12.8333V11.5M11 19.5V18.1667M9.4375 15.5H12.5625M12.5625 15.5C13.0803 15.5 13.5 15.9477 13.5 16.5V17.1667C13.5 17.719 13.0803 18.1667 12.5625 18.1667H8.5M12.5625 15.5C13.0803 15.5 13.5 15.0523 13.5 14.5V13.8333C13.5 13.281 13.0803 12.8333 12.5625 12.8333H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinDown02Icon;
