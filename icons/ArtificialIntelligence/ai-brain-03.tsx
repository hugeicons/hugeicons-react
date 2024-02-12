import * as React from "react";
import type { SVGProps } from "react";

interface AiBrain03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiBrain03Icon = (props: AiBrain03IconProps) => {
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
        <path d="M4 16.5001C4 18.1569 5.34315 19.5001 7 19.5001C7 20.8808 8.11929 22.0001 9.5 22.0001C10.8807 22.0001 12 20.8808 12 19.5001C12 20.8808 13.1193 22 14.5 22C15.8807 22 17 20.8807 17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535C19.8418 8.60037 20 8.06866 20 7.5C20 5.84315 18.6569 4.5 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11938 12 4.50009C12 3.11938 10.8807 2.00009 9.5 2.00009C8.11929 2.00009 7 3.11938 7 4.50009C5.34315 4.50009 4 5.84324 4 7.50009C4 8.06876 4.15822 8.60046 4.43304 9.05359C3.04727 9.31865 2 10.5371 2 12.0001C2 13.4631 3.04727 14.6815 4.43304 14.9466C4.15822 15.3997 4 15.9314 4 16.5001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AiBrain03Icon;
