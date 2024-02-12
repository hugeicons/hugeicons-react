import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowSquare01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowSquare01Icon = (props: WorkflowSquare01IconProps) => {
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
        <path d="M6 5.5C6 4.56538 6 4.09808 6.20096 3.75C6.33261 3.52197 6.52197 3.33261 6.75 3.20096C7.09808 3 7.56538 3 8.5 3H11.5C12.4346 3 12.9019 3 13.25 3.20096C13.478 3.33261 13.6674 3.52197 13.799 3.75C14 4.09808 14 4.56538 14 5.5C14 6.43462 14 6.90192 13.799 7.25C13.6674 7.47803 13.478 7.66739 13.25 7.79904C12.9019 8 12.4346 8 11.5 8H8.5C7.56538 8 7.09808 8 6.75 7.79904C6.52197 7.66739 6.33261 7.47803 6.20096 7.25C6 6.90192 6 6.43462 6 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 15.5C6 14.5654 6 14.0981 6.20096 13.75C6.33261 13.522 6.52197 13.3326 6.75 13.201C7.09808 13 7.56538 13 8.5 13H11.5C12.4346 13 12.9019 13 13.25 13.201C13.478 13.3326 13.6674 13.522 13.799 13.75C14 14.0981 14 14.5654 14 15.5C14 16.4346 14 16.9019 13.799 17.25C13.6674 17.478 13.478 17.6674 13.25 17.799C12.9019 18 12.4346 18 11.5 18H8.5C7.56538 18 7.09808 18 6.75 17.799C6.52197 17.6674 6.33261 17.478 6.20096 17.25C6 16.9019 6 16.4346 6 15.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.8398 17.1408C21.6133 16.3673 22 15.9806 22 15.5C22 15.0194 21.6133 14.6327 20.8398 13.8592L20.6408 13.6602C19.8673 12.8867 19.4806 12.5 19 12.5C18.5194 12.5 18.1327 12.8867 17.3592 13.6602L17.1602 13.8592C16.3867 14.6327 16 15.0194 16 15.5C16 15.9806 16.3867 16.3673 17.1602 17.1408L17.3592 17.3398C18.1327 18.1133 18.5194 18.5 19 18.5C19.4806 18.5 19.8673 18.1133 20.6408 17.3398L20.8398 17.1408Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.00588 5.5H2.00769M2.00769 5.5V2M2.00769 5.5V12C2.00769 13.1037 1.85639 14.4679 2.89615 15.1629C3.40036 15.5 4.10228 15.5 5.50611 15.5M14.0023 15.5H16.0014M19 12.5V9.5C19 7.61438 19 6.67157 18.4145 6.08579C17.829 5.5 16.8866 5.5 15.0018 5.5H14.0023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22C21.0681 22 20.6022 22 20.2346 21.8695C19.7446 21.6955 19.3552 21.3618 19.1522 20.9417C19 20.6267 19 20.2273 19 19.4286V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkflowSquare01Icon;
