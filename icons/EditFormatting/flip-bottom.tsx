import * as React from "react";
import type { SVGProps } from "react";

interface FlipBottomIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FlipBottomIcon = (props: FlipBottomIconProps) => {
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
        <path d="M14.3332 2L9.66658 2M20.9849 7.5C21.0021 7.99962 21.0029 8.49991 21.0015 9M3.01507 7.5C2.99791 7.99962 2.99703 8.49991 2.99853 9M20.4629 4.74533C19.9788 3.78698 19.1975 3.00864 18.237 2.52818M5.82028 2.5C4.83352 2.9779 4.03078 3.76801 3.53707 4.74532" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.495 12C20.453 12 20.9931 12.6378 20.9931 14.5C20.9931 17.0317 21.243 19.9537 18.7448 21.3971C17.7014 22 16.3005 22 13.4988 22L10.5012 22C7.69947 22 6.29863 22 5.25521 21.3971C2.75702 19.9537 3.00695 17.0317 3.00695 14.5C3.00695 12.5404 3.64422 12 5.50502 12L18.495 12Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FlipBottomIcon;
