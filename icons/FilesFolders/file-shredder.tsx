import * as React from "react";
import type { SVGProps } from "react";

interface FileShredderIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileShredderIcon = (props: FileShredderIconProps) => {
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
        <path d="M22 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12.1819C3.5 9.21871 3.5 7.73713 3.96894 6.55382C4.72281 4.65149 6.31714 3.15095 8.33836 2.44142C9.59563 2.00007 11.1698 2.00007 14.3182 2.00007C16.1173 2.00007 17.0168 2.00007 17.7352 2.25227C18.8902 2.65771 19.8012 3.51516 20.232 4.60221C20.5 5.27839 20.5 6.12501 20.5 7.81825L20.5 12.0001" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 15L6 17M10 15V22M14 15V18M18 15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileShredderIcon;
