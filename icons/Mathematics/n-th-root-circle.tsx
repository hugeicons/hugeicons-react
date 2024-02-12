import * as React from "react";
import type { SVGProps } from "react";

interface NThRootCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NThRootCircleIcon = (props: NThRootCircleIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.5048 8.48535L12.2537 8.48536C11.437 8.48536 11.4844 8.63898 11.3234 9.46303L10.0145 14.5133C9.68244 15.8414 9.28914 15.4711 9.28914 15.4711C8.92914 15.3511 8.87392 15.2096 8.26415 13.9573L7.85415 13.074C7.5915 12.5346 7.26222 12.5981 7.08189 12.6797C7.08189 12.6797 6.80521 12.7804 6.49805 12.9796M12.997 11.5058C13.417 11.4919 13.8643 11.4691 14.0896 11.9235C14.4329 12.6159 14.9494 13.8127 15.1513 14.2628C15.2523 14.4359 15.5682 14.49 15.5682 14.49C15.8375 14.5246 16.1408 14.5133 16.1408 14.5133M16.3327 11.5058C15.4865 11.5058 14.9876 12.4812 14.5138 13.074C13.9045 13.9807 13.4598 14.49 12.8042 14.5133" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NThRootCircleIcon;
