import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDown05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowDown05Icon = (props: ArrowDown05IconProps) => {
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
        <path d="M6 19.9985H17.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.996 4.00195V11.53M14.5055 14.5899L15.9502 12.6384C16.2907 12.1784 15.9594 11.53 15.3839 11.53H8.67439C8.10419 11.53 7.77156 12.1679 8.10132 12.6291L9.50342 14.5899L11.444 16.9564C11.7237 17.2976 12.2484 17.2996 12.5307 16.9606L14.5055 14.5899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowDown05Icon;
