import * as React from "react";
import type { SVGProps } from "react";

interface TextSelectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TextSelectionIcon = (props: TextSelectionIconProps) => {
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
        <path d="M2.99805 3.02225C5.19567 2.97012 6.26974 2.90526 6.99805 4.51545M6.99805 4.51545C7.5553 3.26352 8.38724 2.90739 10.998 3.02225M6.99805 4.51545V18.9498M6.99805 18.9498C7.22903 20.6879 8.13369 21.1036 10.998 20.9407M6.99805 18.9498C6.69453 20.7315 5.77238 21.1739 2.99805 20.9407M3.99805 11.9815H9.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9709 15.9633V20.4429M20.9709 15.9633C21.0181 15.1438 21.0198 14.5197 20.9211 14.0102C20.6885 12.8092 19.4298 12.0855 18.2119 11.9383C17.0462 11.7974 16.1105 12.0966 15.164 13.4716M20.9709 15.9633L18.1316 15.9633C17.6954 15.9633 17.2554 15.9842 16.8351 16.1007C14.2664 16.8126 14.4547 20.4042 17.031 20.8468C17.3171 20.896 17.6093 20.9171 17.899 20.9042C18.5756 20.874 19.1999 20.5482 19.7356 20.1351C20.3632 19.6513 20.9709 18.9758 20.9709 17.9542V15.9633Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TextSelectionIcon;
