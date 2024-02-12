import * as React from "react";
import type { SVGProps } from "react";

interface Passport01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Passport01Icon = (props: Passport01IconProps) => {
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
        <path d="M12.9502 22C15.5949 22 16.9172 22 17.8666 21.2437C18.8159 20.4874 19.1188 19.1927 19.7245 16.6033L21.6419 8.40693C21.9772 6.9736 22.1448 6.25693 21.8404 5.73787C21.2876 4.79526 19.8787 4.99997 18.9592 4.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 9C2 5.70017 2 4.05025 3.02513 3.02513C4.05025 2 5.70017 2 9 2H12C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22H9C5.70017 22 4.05025 22 3.02513 20.9749C2 19.9497 2 18.2998 2 15V9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 6C12.7091 6 14.5 7.79086 14.5 10C14.5 12.2091 12.7091 14 10.5 14M10.5 6C8.29086 6 6.5 7.79086 6.5 10C6.5 12.2091 8.29086 14 10.5 14M10.5 6C9.67157 6 9 7.79086 9 10C9 12.2091 9.67157 14 10.5 14M10.5 6C11.3284 6 12 7.79086 12 10C12 12.2091 11.3284 14 10.5 14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Passport01Icon;
