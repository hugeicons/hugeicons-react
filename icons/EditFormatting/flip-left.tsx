import * as React from "react";
import type { SVGProps } from "react";

interface FlipLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FlipLeftIcon = (props: FlipLeftIconProps) => {
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
        <path d="M2 9.66676V14.3334M7.5 3.01509C7.99962 2.99793 8.49991 2.99705 9 2.99855M7.5 20.9849C7.99962 21.0021 8.49991 21.003 9 21.0015M4.74533 3.53709C3.78698 4.02122 3.00864 4.80249 2.52818 5.76305M2.5 18.1797C2.9779 19.1665 3.76801 19.9692 4.74533 20.4629" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 5.50502C12 3.54695 12.6378 3.00695 14.5 3.00695C17.0317 3.00695 19.9537 2.75702 21.3971 5.25521C22 6.29863 22 7.69948 22 10.5012V13.4988C22 16.3005 22 17.7014 21.3971 18.7448C19.9537 21.243 17.0317 20.9931 14.5 20.9931C12.6378 20.9931 12 20.453 12 18.495V5.50502Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FlipLeftIcon;
