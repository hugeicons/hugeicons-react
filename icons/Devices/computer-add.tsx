import * as React from "react";
import type { SVGProps } from "react";

interface ComputerAddIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerAddIcon = (props: ComputerAddIconProps) => {
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
        <path d="M11.5046 2H10.0039C6.72304 2 5.08264 2 3.91983 2.81382C3.48962 3.1149 3.11544 3.48891 2.81421 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81421 16.0811C3.11544 16.5111 3.48962 16.8851 3.91983 17.1862C5.08264 18 6.72304 18 10.0039 18H14.0058C17.2866 18 18.927 18 20.0898 17.1862C20.52 16.8851 20.8942 16.5111 21.1954 16.0811C21.8241 15.1837 21.9674 14.0017 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 6H18M18 6L22 6M18 6L18 2M18 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ComputerAddIcon;
