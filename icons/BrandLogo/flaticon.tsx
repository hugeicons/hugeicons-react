import * as React from "react";
import type { SVGProps } from "react";

interface FlaticonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FlaticonIcon = (props: FlaticonIconProps) => {
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
        <path d="M4.4235 10.2502L9.61532 19.0797L9.61533 19.0797C10.1023 19.9079 10.3458 20.322 10.6054 20.5488C11.296 21.1523 12.2368 21.1502 12.9255 20.5437C13.1844 20.3157 13.4266 19.9006 13.911 19.0703L10.2334 12.955L12.0899 9.74998H8.30599L6.6712 7.03158L13.6646 7.03158L16 3L7.60332 3.00004C4.33248 3.00004 2.69707 3.00004 2.15323 4.24003C1.60939 5.48002 2.54743 7.07009 4.4235 10.2502Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.8349 4.22015C22.4209 5.50363 21.4101 7.14947 19.3883 10.4412L15.3729 17L13 13.2101L19.1577 3C20.621 3.10933 21.4638 3.40743 21.8349 4.22015Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FlaticonIcon;
