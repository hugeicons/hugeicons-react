import * as React from "react";
import type { SVGProps } from "react";

interface RotateRight06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateRight06Icon = (props: RotateRight06IconProps) => {
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
        <path d="M17.4901 10.2679C18.0624 9.87289 18.2015 9.09541 17.8008 8.53131C17.4001 7.96722 16.6113 7.83013 16.039 8.22511L10.5124 12.0394L9.58916 12.7111L9.61884 10.3004C9.61884 9.46209 8.87951 8.80984 8.03416 8.90243C7.38732 8.97327 6.87104 9.46649 6.77901 10.1015L6.18 14.2344C6.04406 15.1724 5.97609 15.6413 6.01017 16.0915C6.06215 16.7783 6.28646 17.4415 6.66293 18.0217C6.90969 18.402 7.24954 18.737 7.92924 19.4069L9.32442 20.7821C10.7596 22.1967 13.0136 22.4028 14.6883 21.2726L18.7349 18.5417L20.462 17.3497C21.0343 16.9547 21.1733 16.1773 20.7726 15.6132C20.3719 15.0491 19.5831 14.912 19.0108 15.307M17.4901 10.2679L18.8718 9.3143C19.4441 8.91932 20.2329 9.05641 20.6336 9.6205C21.0343 10.1846 20.8952 10.9621 20.3229 11.3571L18.9413 12.3106M17.4901 10.2679L14.3814 12.4134M19.0108 15.307L20.3925 14.3534C20.9647 13.9584 21.1038 13.1809 20.7031 12.6168C20.3024 12.0527 19.5136 11.9156 18.9413 12.3106M19.0108 15.307L17.2838 16.4989M18.9413 12.3106L15.8326 14.4562" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6366 4.96563C14.2397 5.36127 12.5131 5.24713 11.8762 5.16769M14.6366 4.96563C15.0335 4.56999 15.0449 2.63795 14.9652 2.00306M14.6366 4.96563C13.6156 3.1974 9.55602 0.376851 5.52763 3.1974C3.58097 4.5604 3.30628 5.41935 2.99844 5.99478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateRight06Icon;
