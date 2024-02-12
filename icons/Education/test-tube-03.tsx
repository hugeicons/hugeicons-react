import * as React from "react";
import type { SVGProps } from "react";

interface TestTube03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TestTube03Icon = (props: TestTube03IconProps) => {
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
        <path d="M8.01562 2.00195H15.9751" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5332 11.1501C5.5332 11.1501 8.5332 10.2242 11.0332 13.0017M18.5332 11.613C18.5332 11.613 17.9216 12.5922 17.0332 13.0019" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0332 18.0039L10.0419 18.0015" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0332 14.0039L14.0419 14.0015" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.52693 2.21484V6.25745C9.52693 6.91941 9.17519 7.49018 8.59404 7.80163C5.60885 9.40144 2.80495 13.934 5.74609 18.5793C6.4044 19.7188 8.57684 21.9979 12.0001 21.9979C15.4233 21.9979 17.5957 19.7188 18.2541 18.5793C21.1952 13.934 18.3913 9.40144 15.4061 7.80163C14.825 7.49018 14.4725 6.91941 14.4725 6.25745V2.26362" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TestTube03Icon;
