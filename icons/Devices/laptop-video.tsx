import * as React from "react";
import type { SVGProps } from "react";

interface LaptopVideoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LaptopVideoIcon = (props: LaptopVideoIconProps) => {
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
        <path d="M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H9M20 15V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LaptopVideoIcon;
