import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft05Icon = (props: RotateLeft05IconProps) => {
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
        <path d="M7.28353 11.0618L3.57403 8.48009C2.95942 8.05234 2.8142 7.20445 3.24967 6.58627C3.68514 5.96809 4.5364 5.81372 5.15101 6.24147L12.57 11.4048L13.1511 11.7989L13.1202 9.25969C13.1202 8.34959 13.9128 7.64155 14.8192 7.74205C15.5127 7.81895 16.0662 8.35437 16.1649 9.04374L16.8071 13.5302C16.9528 14.5484 17.0257 15.0575 16.9892 15.5462C16.9334 16.2917 16.693 17.0117 16.2893 17.6415C16.0248 18.0543 15.6604 18.418 14.9317 19.1453L13.3959 20.6779C11.8751 22.1957 9.49344 22.4341 7.70091 21.2479L4.40735 19.0685L4.0364 18.8103C3.42179 18.3826 3.27657 17.5347 3.71204 16.9165C4.14751 16.2983 4.99877 16.1439 5.61338 16.5717L5.98433 16.8299M7.28353 11.0618L8.39638 11.8363M7.28353 11.0618C6.66892 10.634 5.81767 10.7884 5.3822 11.4066C4.94672 12.0248 5.09195 12.8726 5.70656 13.3004L6.44846 13.8167M6.44846 13.8167L6.81941 14.0749M6.44846 13.8167C5.83385 13.389 4.98259 13.5434 4.54712 14.1615C4.11165 14.7797 4.25687 15.6276 4.87148 16.0554L5.24243 16.3135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.36336 4.96563C9.76026 5.36127 11.4869 5.24713 12.1238 5.16769M9.36336 4.96563C8.96647 4.56999 8.95511 2.63795 9.0348 2.00306M9.36336 4.96563C10.3844 3.1974 14.444 0.376851 18.4724 3.1974C20.419 4.5604 20.6937 5.41935 21.0016 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft05Icon;
