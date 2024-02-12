import * as React from "react";
import type { SVGProps } from "react";

interface FileNotFoundIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileNotFoundIcon = (props: FileNotFoundIconProps) => {
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
        <path d="M2 2.20703L22 22.0009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.56184 2.51505C8.5678 1.91313 14.3164 1.79188 17.7237 2.39736C18.5488 2.54399 19.3437 3.0755 19.7778 3.78202C20.5043 4.96464 20.4645 6.34166 20.4645 7.72387L20.3454 16.1787M3.99923 4.17153C3.36693 6.43927 3.45205 10.6 3.4932 16.7418C3.4985 17.5322 3.5359 18.3321 3.77395 19.087C4.1427 20.2564 4.75685 20.9661 6.10578 21.5373C6.68148 21.781 7.31205 21.8613 7.9387 21.8613H11.9824C15.7784 21.7689 17.31 21.373 18.9879 19.1833M10.4855 21.8613C12.8671 20.6539 14.0939 20.4861 13.782 17.45C13.7225 16.6637 14.1719 15.725 14.976 15.4733M20.4036 12.0447C20.1613 13.4807 19.9982 14.0146 19.0285 14.846" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileNotFoundIcon;
