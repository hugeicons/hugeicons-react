import * as React from "react";
import type { SVGProps } from "react";

interface FileLockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileLockedIcon = (props: FileLockedIconProps) => {
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
        <path d="M11.0025 21.9971H10.7302C7.47395 21.9971 5.84581 21.9971 4.71514 21.1993C4.39118 20.9707 4.10357 20.6996 3.86106 20.3942C3.01465 19.3284 3.01465 17.7937 3.01465 14.7244V12.1789C3.01465 9.21572 3.01465 7.73413 3.48288 6.55082C4.2356 4.64849 5.82752 3.14795 7.84567 2.43842C9.10104 1.99707 10.6728 1.99707 13.8164 1.99707C15.6128 1.99707 16.511 1.99707 17.2283 2.24927C18.3815 2.65472 19.2911 3.51217 19.7213 4.59921C19.9889 5.27539 19.9889 6.12201 19.9889 7.81525V9.99707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.00195 11.9971C3.00195 10.1562 4.49311 8.66374 6.33255 8.66374C6.99779 8.66374 7.78207 8.7804 8.42887 8.60695C9.00354 8.45283 9.45242 8.00359 9.60641 7.42843C9.77972 6.78111 9.66315 5.99619 9.66315 5.3304C9.66315 3.48945 11.1544 1.99707 12.9937 1.99707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.7436 16.1775L15.7436 14.7868C15.7436 14.5813 15.7522 14.3733 15.8257 14.1815C16.0215 13.6709 16.54 13.002 17.4841 13.002C18.4281 13.002 18.9671 13.6709 19.1628 14.1815C19.2364 14.3733 19.245 14.5813 19.245 14.7868L19.2449 16.1775M15.813 22.002H19.1959C20.1918 22.002 20.9992 21.1951 20.9992 20.1999V18.198C20.9992 17.2028 20.1918 16.396 19.1959 16.396H15.813C14.8171 16.396 14.0098 17.2028 14.0098 18.198V20.1999C14.0098 21.1951 14.8171 22.002 15.813 22.002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileLockedIcon;
