import * as React from "react";
import type { SVGProps } from "react";

interface SendToMobileIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SendToMobileIcon = (props: SendToMobileIconProps) => {
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
        <path d="M17.002 6C16.9152 4.58055 16.6769 3.67665 16.023 3.02513C14.9943 2 13.3385 2 10.0269 2C6.71528 2 5.05949 2 4.03072 3.02513C3.00195 4.05025 3.00195 5.70017 3.00195 9V15C3.00195 18.2998 3.00195 19.9497 4.03072 20.9749C5.05949 22 6.71528 22 10.0269 22C13.3385 22 14.9943 22 16.023 20.9749C16.6769 20.3233 16.9152 19.4194 17.002 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.002 19H10.011" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4724 8.98633L20.7231 11.1928C21.0208 11.5112 21.1112 12.3519 20.8208 12.6418L18.4724 14.9863M10.998 12.0428H20.341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SendToMobileIcon;
