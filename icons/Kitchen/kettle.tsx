import * as React from "react";
import type { SVGProps } from "react";

interface KettleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KettleIcon = (props: KettleIconProps) => {
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
        <path d="M2 17C2 18.9497 2.02815 21 4.4 21H15.6C17.9718 21 18 18.9497 18 17C18 12.5817 14.4183 9 10 9C5.58172 9 2 12.5817 2 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9V8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8V9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 17C19.1046 17 20 16.1046 20 15V13C20 11.8954 20.8954 11 22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11.5V9C16 5.68629 13.3137 3 10 3C6.68629 3 4 5.68629 4 9V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KettleIcon;
