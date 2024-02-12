import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDataTransferDiagonalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowDataTransferDiagonalIcon = (props: ArrowDataTransferDiagonalIconProps) => {
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
        <path d="M9 19L18.1795 9.9942C18.9276 9.26025 19.3016 8.89327 19.6243 9.02718C19.9469 9.16108 19.9526 9.68566 19.964 10.7348L20 14.0459" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5L5.82055 14.0058C5.07244 14.7398 4.69839 15.1067 4.37573 14.9728C4.05306 14.8389 4.04736 14.3143 4.03597 13.2652L4 9.95414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowDataTransferDiagonalIcon;
