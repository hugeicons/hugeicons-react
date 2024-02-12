import * as React from "react";
import type { SVGProps } from "react";

interface Bedug02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bedug02Icon = (props: Bedug02IconProps) => {
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
        <path d="M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 3C8.46579 2.37764 10.3912 2 12.5 2C14.6088 2 16.5342 2.37764 18 3C20.5 4 22 6.13401 22 10C22 13.866 20.5 16 18 17C16.5342 17.6224 14.6088 18 12.5 18C10.3912 18 8.46579 17.6224 7 17" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 22L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 15L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10C3 6.13401 4.79086 3 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C5.51321 17 4.21588 15.5804 3.52643 13.4736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.99981 10H7.00879" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 22L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bedug02Icon;
