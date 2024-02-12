import * as React from "react";
import type { SVGProps } from "react";

interface FileZipIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileZipIcon = (props: FileZipIconProps) => {
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
        <path d="M10 21.998C7.53751 21.9856 6.18354 21.8929 5.20307 21.2021C4.87862 20.9735 4.59058 20.7024 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7272V12.1818C3.5 9.21862 3.5 7.73703 3.96894 6.55372C4.72281 4.6514 6.31714 3.15086 8.33836 2.44133C9.59563 1.99997 11.1698 1.99997 14.3182 1.99997C16.1173 1.99997 17.0168 1.99997 17.7352 2.25217C18.8902 2.65762 19.8012 3.51507 20.232 4.60212C20.5 5.27829 20.5 6.12491 20.5 7.81816V14C20.5 17.4377 20.5 19.3085 19.5571 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 19.0991V20.3505C12.5 20.9102 12.5 21.1901 12.6115 21.406C12.7221 21.6201 12.9072 21.7928 13.1367 21.896C13.3681 22 13.6681 22 14.2681 22H15.2319C15.8319 22 16.1319 22 16.3633 21.896C16.5928 21.7928 16.7779 21.6201 16.8885 21.406C17 21.1901 17 20.9102 17 20.3505V19.0991C17 18.304 16.5185 17.5772 15.7562 17.2216C15.1228 16.9261 14.3772 16.9261 13.7438 17.2216C12.9815 17.5772 12.5 18.304 12.5 19.0991Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4H15M16 6.5H17M14 8.5H15M16 10.6H17M14 13H15M16 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileZipIcon;
