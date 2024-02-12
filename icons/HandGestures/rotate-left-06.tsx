import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft06Icon = (props: RotateLeft06IconProps) => {
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
        <path d="M6.50989 10.2679C5.9376 9.87289 5.79851 9.09541 6.19924 8.53131C6.59996 7.96722 7.38875 7.83013 7.96105 8.22511L13.4876 12.0394L14.4108 12.7111L14.3811 10.3004C14.3811 9.46209 15.1205 8.80984 15.9658 8.90243C16.6127 8.97327 17.1289 9.46649 17.221 10.1015L17.82 14.2344C17.9559 15.1724 18.0239 15.6413 17.9898 16.0915C17.9378 16.7783 17.7135 17.4415 17.337 18.0217C17.0903 18.402 16.7504 18.737 16.0707 19.4069L14.6756 20.7821C13.2404 22.1967 10.9864 22.4028 9.31173 21.2726L5.26512 18.5417L3.53807 17.3497C2.96577 16.9547 2.82669 16.1773 3.22741 15.6132C3.62814 15.0491 4.41693 14.912 4.98922 15.307M6.50989 10.2679L5.12825 9.3143C4.55595 8.91932 3.76716 9.05641 3.36644 9.6205C2.96571 10.1846 3.1048 10.9621 3.67709 11.3571L5.05874 12.3106M6.50989 10.2679L9.61859 12.4134M4.98922 15.307L3.60758 14.3534C3.03528 13.9584 2.8962 13.1809 3.29692 12.6168C3.69765 12.0527 4.48644 11.9156 5.05874 12.3106M4.98922 15.307L6.71628 16.4989M5.05874 12.3106L8.16743 14.4562" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.36336 4.96563C9.76026 5.36127 11.4869 5.24713 12.1238 5.16769M9.36336 4.96563C8.96647 4.56999 8.95511 2.63795 9.0348 2.00306M9.36336 4.96563C10.3844 3.1974 14.444 0.376851 18.4724 3.1974C20.419 4.5604 20.6937 5.41935 21.0016 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft06Icon;
