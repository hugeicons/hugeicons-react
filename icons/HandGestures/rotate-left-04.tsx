import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft04Icon = (props: RotateLeft04IconProps) => {
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
        <path d="M5.14783 11.9209C4.52466 11.5669 3.72169 11.7879 3.35434 12.4147C2.98698 13.0414 3.19436 13.8365 3.81752 14.1906L5.32196 15.0454M5.14783 11.9209L3.64338 11.0661C3.02022 10.712 2.81285 9.91693 3.1802 9.29017C3.54756 8.66342 4.35053 8.44237 4.97369 8.79645L6.10193 9.43772M5.14783 11.9209L9.28505 14.2717M5.32196 15.0454C4.6988 14.6914 3.89583 14.9124 3.52848 15.5392C3.16112 16.1659 3.36849 16.961 3.99166 17.3151L8.63049 19.9509C10.2653 20.8798 11.0827 21.3442 11.8803 21.4635C12.343 21.5328 13.0491 21.423 13.5766 21.3142C14.0329 21.2201 14.5098 21.2745 14.9098 21.5018L15.7859 21.9995M5.32196 15.0454L8.70697 16.9688M6.10193 9.43772C5.47914 9.08351 5.27197 8.28863 5.63923 7.66204C6.00659 7.03528 6.80956 6.81424 7.43272 7.16831L13.7979 10.7848L13.2938 8.86424C13.0726 8.02157 13.6408 7.16341 14.5117 7.02485C15.1781 6.91882 15.8252 7.27312 16.085 7.8862L17.9476 12.5749C18.304 13.472 19.1581 14.3346 19.9985 14.8122M6.10193 9.43772L9.86305 11.5748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.36336 4.96563C9.76026 5.36127 11.4869 5.24713 12.1238 5.16769M9.36336 4.96563C8.96647 4.56999 8.95511 2.63795 9.0348 2.00306M9.36336 4.96563C10.3844 3.1974 14.444 0.376851 18.4724 3.1974C20.419 4.5604 20.6937 5.41935 21.0016 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft04Icon;
