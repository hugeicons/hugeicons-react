import * as React from "react";
import type { SVGProps } from "react";

interface PasswordValidationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PasswordValidationIcon = (props: PasswordValidationIconProps) => {
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
        <path d="M13.4082 16.6682C13.4082 16.6682 14.0332 16.6682 14.6582 18.0015C14.6582 18.0015 16.6435 14.6682 18.4082 14.0015" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9434 7.00146H16.9524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9434 7.00146H11.9524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.94336 7.00146H6.95234" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.89193 11.9685H5.00845C3.34693 11.9685 2 10.6254 2 8.96851V4.99854C2 3.34168 3.34693 1.99854 5.00845 1.99854H18.9916C20.6531 1.99854 22 3.34168 22 4.99854V9.12944" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9996 16.0015C21.9996 12.6878 19.3057 10.0015 15.9827 10.0015C12.6597 10.0015 9.96582 12.6878 9.96582 16.0015C9.96582 19.3152 12.6597 22.0015 15.9827 22.0015C19.3057 22.0015 21.9996 19.3152 21.9996 16.0015Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PasswordValidationIcon;
