import * as React from "react";
import type { SVGProps } from "react";

interface LinkBackwardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkBackwardIcon = (props: LinkBackwardIconProps) => {
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
        <path d="M4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18C19.6309 17.0302 18.2632 15.997 16.6177 15.5476C14.5636 14.9865 12.2696 15.2542 10.1528 15.2542C10.1528 15.972 10.4675 18.0982 9.51139 18.4351C8.64251 18.7413 8.18956 17.9409 6.77353 16.5199L4.80823 14.5477C3.60275 13.338 3 12.7332 3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkBackwardIcon;
