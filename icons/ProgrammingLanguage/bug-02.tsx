import * as React from "react";
import type { SVGProps } from "react";

interface Bug02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bug02Icon = (props: Bug02IconProps) => {
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
        <path d="M3.012 6.59766C2.89208 7.65695 3.65834 10.1953 5.87687 10.2552" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.2891 10.1953C19.3683 10.2552 20.9873 8.99606 20.9873 6.59766" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.0876 20.9882C20.1475 19.6091 19.2481 17.4745 17.5093 17.4146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.90131 20.9883C3.84003 19.5999 4.75934 17.451 6.53668 17.3907" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.01221 13.793H5.21751" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.9999 13.793L18.8281 13.793" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9931 13.7928V10.8548M16.4901 3L14.6913 4.7988M7.49609 3L9.2949 4.7988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.95605 8.6123C8.57498 9.77553 12.5923 11.4544 16.9694 8.68426" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.8259 7.67688C13.2523 2.70019 8.6953 5.09859 7.07638 7.82078C6.02087 9.5956 4.37817 13.8887 7.4961 18.5656C10.8539 22.6669 14.8112 20.8082 16.4302 18.6496C17.9891 16.7908 19.5241 11.994 16.8259 7.67688Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bug02Icon;
