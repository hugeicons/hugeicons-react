import * as React from "react";
import type { SVGProps } from "react";

interface BubbleTea01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BubbleTea01Icon = (props: BubbleTea01IconProps) => {
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
        <path d="M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 9H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 9L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0089 16.5H10M14 18H13.9911M13.0112 14H13.0023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BubbleTea01Icon;
