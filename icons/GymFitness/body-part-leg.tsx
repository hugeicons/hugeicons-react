import * as React from "react";
import type { SVGProps } from "react";

interface BodyPartLegIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BodyPartLegIcon = (props: BodyPartLegIconProps) => {
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
        <path d="M5.00186 2C7.69319 2.31359 13.8994 3.89572 16.6429 7.74552C16.9785 8.21643 17.332 8.54976 17.9114 8.69637C18.6361 8.87638 19.236 9.36245 19.4537 10.0961C19.6856 10.8944 20.1138 11.7364 19.9778 12.5901C19.9257 12.9169 19.7657 13.218 19.4458 13.82L15.0988 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.00186 12C5.00186 13.7264 8.16625 14.5959 12.0019 13.7264C11.4156 14.0677 10.4146 14.6835 9.31715 15.9511C8.75817 16.5968 8.51962 17.4954 8.4807 18.4026C8.42868 19.615 8.24882 20.9338 7.62686 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.00186 7C5.00186 7 6.96083 7.28919 8.50186 8.5C9.50186 9.28571 11.4185 9.80952 12.0019 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BodyPartLegIcon;
