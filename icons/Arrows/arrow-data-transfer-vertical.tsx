import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDataTransferVerticalIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowDataTransferVerticalIcon = (props: ArrowDataTransferVerticalIconProps) => {
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
        <path d="M15 19L15 6.65856C15 5.65277 15 5.14987 15.3087 5.02472C15.6173 4.89956 15.9806 5.25517 16.7071 5.96637L19 8.21091" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5L9 17.3414C9 18.3472 9 18.8501 8.69134 18.9753C8.38268 19.1004 8.01942 18.7448 7.29289 18.0336L5 15.7891" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowDataTransferVerticalIcon;
