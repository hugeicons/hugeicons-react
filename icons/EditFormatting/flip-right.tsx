import * as React from "react";
import type { SVGProps } from "react";

interface FlipRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FlipRightIcon = (props: FlipRightIconProps) => {
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
        <path d="M22 9.66676V14.3334M16.5 3.01509C16.0004 2.99793 15.5001 2.99705 15 2.99855M16.5 20.9849C16.0004 21.0021 15.5001 21.003 15 21.0015M19.2547 3.53709C20.213 4.02122 20.9914 4.80249 21.4718 5.76305M21.5 18.1797C21.0221 19.1665 20.232 19.9692 19.2547 20.4629" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 5.50502C12 3.54695 11.3622 3.00695 9.5 3.00695C6.96832 3.00695 4.04633 2.75702 2.60289 5.25521C2 6.29863 2 7.69948 2 10.5012V13.4988C2 16.3005 2 17.7014 2.60289 18.7448C4.04633 21.243 6.96832 20.9931 9.5 20.9931C11.3622 20.9931 12 20.453 12 18.495V5.50502Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FlipRightIcon;
