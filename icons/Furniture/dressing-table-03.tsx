import * as React from "react";
import type { SVGProps } from "react";

interface DressingTable03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DressingTable03Icon = (props: DressingTable03IconProps) => {
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
        <path d="M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13H20C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15V17C22 17.9428 22 18.4142 21.7071 18.7071C21.4142 19 20.9428 19 20 19H4C3.05719 19 2.58579 19 2.29289 18.7071C2 18.4142 2 17.9428 2 17V15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 16L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 19C18.7 20.6 19.5 21.6667 20 22M4.5 19C5.3 20.6 4.5 21.6667 4 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 13V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 13V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 3.50005L8.08579 3.50003C8.28215 3.50003 8.38034 3.50003 8.4645 3.4688C8.54867 3.43757 8.63373 3.36436 8.80385 3.21795C10.6907 1.59404 13.3093 1.59403 15.1961 3.21791C15.3663 3.36432 15.4513 3.43753 15.5355 3.46876C15.6197 3.49999 15.7178 3.49999 15.9142 3.49999H20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9.5L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DressingTable03Icon;
