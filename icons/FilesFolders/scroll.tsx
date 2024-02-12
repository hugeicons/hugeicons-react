import * as React from "react";
import type { SVGProps } from "react";

interface ScrollIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ScrollIcon = (props: ScrollIconProps) => {
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
        <path d="M5.97492 16.9866V6.53176C5.97492 5.18708 6.03245 3.6264 7.03977 2.73286C7.86598 1.99997 9.03378 1.99999 10.1399 2H17.4509C18.4773 2 19.5415 2.01838 20.4624 2.47045C20.5366 2.50684 20.6074 2.54483 20.6751 2.58464C22.0418 3.38809 21.9999 5.30216 21.9999 6.88462V17.4169C21.9999 18.4584 21.952 19.528 21.5196 20.476C21.1061 21.3828 20.5403 21.7897 19.496 21.9822M5.97492 16.9866H14.8045C15.2176 16.9866 15.5897 17.2396 15.7348 17.6254C15.8611 17.9615 15.9655 18.2521 16.0576 18.5248C16.381 19.4827 16.6645 20.4938 17.3454 21.2423C17.754 21.6916 18.183 21.92 18.7541 21.9822M5.97492 16.9866H2.96877C2.4162 16.9866 1.95792 17.4343 2.00308 17.9836C2.05046 18.56 2.15239 19.062 2.34264 19.5993C2.67902 20.5493 3.26232 21.5103 4.22224 21.8236C4.57657 21.9393 4.96889 21.9772 5.47414 21.9822H18.7541M19.496 21.9822C19.2221 22.0054 18.9773 22.0065 18.7541 21.9822M19.496 21.9822H18.7541" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4688 7H17.4688" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4688 11H13.9688" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ScrollIcon;
