import * as React from "react";
import type { SVGProps } from "react";

interface SmartPhone03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartPhone03Icon = (props: SmartPhone03IconProps) => {
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
        <path d="M5.5 9C5.5 5.70017 5.5 4.05025 6.4519 3.02513C7.40381 2 8.93587 2 12 2C15.0641 2 16.5962 2 17.5481 3.02513C18.5 4.05025 18.5 5.70017 18.5 9V15C18.5 18.2998 18.5 19.9497 17.5481 20.9749C16.5962 22 15.0641 22 12 22C8.93587 22 7.40381 22 6.4519 20.9749C5.5 19.9497 5.5 18.2998 5.5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 8.5C22 8.5 21 8.846 21 9.8125C21 10.779 22 11.0335 22 12C22 12.9665 21 13.221 21 14.1875C21 15.154 22 15.5 22 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8.5C2 8.5 3 8.846 3 9.8125C3 10.779 2 11.0335 2 12C2 12.9665 3 13.221 3 14.1875C3 15.154 2 15.5 2 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartPhone03Icon;
