import * as React from "react";
import type { SVGProps } from "react";

interface LaptopPhoneSyncIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LaptopPhoneSyncIcon = (props: LaptopPhoneSyncIconProps) => {
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
        <path d="M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11M20 15V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8L14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 9H18.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LaptopPhoneSyncIcon;
