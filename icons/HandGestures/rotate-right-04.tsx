import * as React from "react";
import type { SVGProps } from "react";

interface RotateRight04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateRight04Icon = (props: RotateRight04IconProps) => {
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
        <path d="M18.8522 11.9209C19.4754 11.5669 20.2783 11.7879 20.6457 12.4147C21.013 13.0414 20.8057 13.8365 20.1825 14.1906L18.6781 15.0454M18.8522 11.9209L20.3566 11.0661C20.9798 10.712 21.1872 9.91693 20.8198 9.29017C20.4525 8.66342 19.6495 8.44237 19.0263 8.79645L17.8981 9.43772M18.8522 11.9209L14.715 14.2717M18.6781 15.0454C19.3012 14.6914 20.1042 14.9124 20.4716 15.5392C20.8389 16.1659 20.6315 16.961 20.0084 17.3151L15.3695 19.9509C13.7347 20.8798 12.9173 21.3442 12.1197 21.4635C11.657 21.5328 10.9509 21.423 10.4234 21.3142C9.96706 21.2201 9.49014 21.2745 9.09013 21.5018L8.2141 21.9995M18.6781 15.0454L15.2931 16.9688M17.8981 9.43772C18.5209 9.08351 18.7281 8.28863 18.3608 7.66204C17.9934 7.03528 17.1905 6.81424 16.5673 7.16831L10.2021 10.7848L10.7062 8.86424C10.9274 8.02157 10.3592 7.16341 9.48823 7.02485C8.82183 6.91882 8.17472 7.27312 7.915 7.8862L6.05235 12.5749C5.69598 13.472 4.8419 14.3346 4.00146 14.8122M17.8981 9.43772L14.137 11.5748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6366 4.96563C14.2397 5.36127 12.5131 5.24713 11.8762 5.16769M14.6366 4.96563C15.0335 4.56999 15.0449 2.63795 14.9652 2.00306M14.6366 4.96563C13.6156 3.1974 9.55602 0.376851 5.52763 3.1974C3.58097 4.5604 3.30628 5.41935 2.99844 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateRight04Icon;
