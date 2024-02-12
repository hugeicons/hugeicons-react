import * as React from "react";
import type { SVGProps } from "react";

interface MetroIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MetroIcon = (props: MetroIconProps) => {
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
        <path d="M6 19L4 21M18 19L20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15H9.00896M14.991 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9C9 13 15.5 13 19 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5.27322 7.89427C6.09442 3.71577 7.23046 3 11.4545 3H12.5455C16.7695 3 17.9056 3.71577 18.7268 7.89427L19.2802 10.71C20.0349 14.5503 20.4123 16.4705 19.312 17.7352C18.2118 19 16.1412 19 12 19C7.85879 19 5.78819 19 4.68796 17.7352C3.58773 16.4705 3.9651 14.5503 4.71984 10.71L5.27322 7.89427Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MetroIcon;
