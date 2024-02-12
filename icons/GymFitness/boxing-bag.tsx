import * as React from "react";
import type { SVGProps } from "react";

interface BoxingBagIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BoxingBagIcon = (props: BoxingBagIconProps) => {
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
        <path d="M18 17.5C14 18.8333 10 18.8333 6 17.5M18 10.5C14 9.16667 10 9.16667 6 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6.5L13.4948 3.68167C12.7977 2.89736 12.4491 2.5052 12 2.5052C11.5509 2.5052 11.2023 2.89736 10.5052 3.68167L8 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 2L6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.1114 21.7682C11.0371 22.0773 12.9629 22.0773 14.8886 21.7682C17.517 21.3464 18 20.4678 18 18.2919V9.70813C18 7.53225 17.517 6.65357 14.8886 6.23178C12.9629 5.92274 11.0371 5.92274 9.1114 6.23178C6.48303 6.65357 6 7.53225 6 9.70813V18.2919C6 20.4678 6.48303 21.3464 9.1114 21.7682Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BoxingBagIcon;
