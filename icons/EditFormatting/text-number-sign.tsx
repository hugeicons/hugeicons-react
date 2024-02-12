import * as React from "react";
import type { SVGProps } from "react";

interface TextNumberSignIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextNumberSignIcon = (props: TextNumberSignIconProps) => {
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
        <path d="M2 20V7.02172C2 5.10465 2 4.00007 2.4389 4.00007C2.95995 4.00007 3.33531 4.66033 4.25033 6.27292L10.7497 17.7271C11.6647 19.3397 12.0233 20 12.5611 20C13 20 13 18.8954 13 16.9784V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13L22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5806 4.58056C17.3546 3.80648 20.6454 3.80648 21.4194 4.58056C22.1935 5.35464 22.1935 8.64536 21.4194 9.41944C20.6454 10.1935 17.3546 10.1935 16.5806 9.41944C15.8065 8.64536 15.8065 5.35464 16.5806 4.58056Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TextNumberSignIcon;
