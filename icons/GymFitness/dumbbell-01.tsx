import * as React from "react";
import type { SVGProps } from "react";

interface Dumbbell01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dumbbell01Icon = (props: Dumbbell01IconProps) => {
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
        <path d="M7.73486 13.7321C7.73486 13.7321 8.64032 12.51 9.23486 12.2316C11.0297 11.3913 11.3948 11.0261 12.2349 9.2307C12.5132 8.63597 13.7349 7.73022 13.7349 7.73022M10.2349 16.2329C10.2349 16.2329 11.4566 15.3271 11.7349 14.7324C12.575 12.9371 12.9401 12.5719 14.7349 11.7315C15.3294 11.4531 16.2349 10.231 16.2349 10.231" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4311 2.89247C14.938 2.38383 15.7611 2.38252 16.2696 2.88956L21.0814 7.68766C21.5899 8.1947 21.5912 9.01807 21.0843 9.52672L19.5557 11.0607C19.0488 11.5693 18.2257 11.5706 17.7172 11.0636L12.9054 6.26547C12.397 5.75843 12.3957 4.93506 12.9025 4.42641L14.4311 2.89247Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.41377 12.9026C4.92065 12.394 5.74376 12.3927 6.25225 12.8997L11.0641 17.6978C11.5725 18.2049 11.5738 19.0282 11.067 19.5369L9.53836 21.0708C9.03148 21.5795 8.20837 21.5808 7.69988 21.0737L2.88808 16.2756C2.37959 15.7686 2.37829 14.9452 2.88517 14.4366L4.41377 12.9026Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.9377 3.45251C19.8201 0.985437 23.14 3.84007 20.5431 6.02869M3.37811 17.9773C0.998473 19.9687 3.99782 23.1586 6.06742 20.4656" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dumbbell01Icon;
