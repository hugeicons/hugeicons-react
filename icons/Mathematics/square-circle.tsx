import * as React from "react";
import type { SVGProps } from "react";

interface SquareCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SquareCircleIcon = (props: SquareCircleIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.29199 11.2085C7.95566 11.1736 8.49973 11.2093 8.75999 11.8205C9.05999 12.525 9.89999 14.7605 10.08 15.2405C10.2875 15.7938 10.62 16.0805 11.624 15.9965" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9119 11.2076C10.8319 11.1476 9.89767 12.8629 9.4639 13.6196C8.9239 14.4596 8.0399 16.0196 7.00391 15.9956" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 11H14.5C14.5 11 16.5049 9.67917 16.7244 9.52908C16.9439 9.37899 17.5 9.05382 17.5 8.32833C17.5 7.60284 16.7751 6.99999 16.0073 7C15.2396 7.00001 14.5 7.53452 14.5 8.33583" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SquareCircleIcon;
