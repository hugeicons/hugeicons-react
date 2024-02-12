import * as React from "react";
import type { SVGProps } from "react";

interface RotateRight05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateRight05Icon = (props: RotateRight05IconProps) => {
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
        <path d="M16.7165 11.0618L20.426 8.48009C21.0406 8.05234 21.1858 7.20445 20.7504 6.58627C20.3149 5.96809 19.4636 5.81372 18.849 6.24147L11.43 11.4048L10.8489 11.7989L10.8798 9.25969C10.8798 8.34959 10.0872 7.64155 9.18078 7.74205C8.48728 7.81895 7.93377 8.35437 7.83509 9.04374L7.19287 13.5302C7.04713 14.5484 6.97425 15.0575 7.01079 15.5462C7.06652 16.2917 7.30701 17.0117 7.71064 17.6415C7.9752 18.0543 8.33956 18.418 9.0683 19.1453L10.6041 20.6779C12.1249 22.1957 14.5066 22.4341 16.2991 21.2479L19.5927 19.0685L19.9636 18.8103C20.5783 18.3826 20.7235 17.5347 20.288 16.9165C19.8525 16.2983 19.0013 16.1439 18.3867 16.5717L18.0157 16.8299M16.7165 11.0618L15.6037 11.8363M16.7165 11.0618C17.3311 10.634 18.1824 10.7884 18.6178 11.4066C19.0533 12.0248 18.9081 12.8726 18.2935 13.3004L17.5516 13.8167M17.5516 13.8167L17.1806 14.0749M17.5516 13.8167C18.1662 13.389 19.0175 13.5434 19.4529 14.1615C19.8884 14.7797 19.7432 15.6276 19.1286 16.0554L18.7576 16.3135" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6366 4.96563C14.2397 5.36127 12.5131 5.24713 11.8762 5.16769M14.6366 4.96563C15.0335 4.56999 15.0449 2.63795 14.9652 2.00306M14.6366 4.96563C13.6156 3.1974 9.55602 0.376851 5.52763 3.1974C3.58097 4.5604 3.30628 5.41935 2.99844 5.99478" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateRight05Icon;
