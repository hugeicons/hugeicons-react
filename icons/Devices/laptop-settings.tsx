import * as React from "react";
import type { SVGProps } from "react";

interface LaptopSettingsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LaptopSettingsIcon = (props: LaptopSettingsIconProps) => {
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
        <path d="M20 15V13.5M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 9.71428V11M18 9.71428C16.8432 9.71428 15.8241 9.14608 15.2263 8.28331M18 9.71428C19.1568 9.71428 20.1759 9.14608 20.7737 8.28331M18 3.28571C19.1569 3.28571 20.1761 3.854 20.7738 4.71688M18 3.28571C16.8431 3.28571 15.8239 3.854 15.2262 4.71688M18 3.28571V2M22 3.92857L20.7738 4.71688M14.0004 9.07143L15.2263 8.28331M14 3.92857L15.2262 4.71688M21.9996 9.07143L20.7737 8.28331M20.7738 4.71688C21.1273 5.22711 21.3333 5.84035 21.3333 6.5C21.3333 7.15973 21.1272 7.77304 20.7737 8.28331M15.2262 4.71688C14.8727 5.22711 14.6667 5.84035 14.6667 6.5C14.6667 7.15973 14.8728 7.77304 15.2263 8.28331" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LaptopSettingsIcon;
