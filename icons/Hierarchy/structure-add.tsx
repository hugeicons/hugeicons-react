import * as React from "react";
import type { SVGProps } from "react";

interface StructureAddIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StructureAddIcon = (props: StructureAddIconProps) => {
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
        <path d="M15.002 5C15.002 3.58579 15.002 2.87868 15.5144 2.43934C16.0267 2 16.8515 2 18.5008 2C20.1502 2 20.975 2 21.4873 2.43934C21.9997 2.87868 21.9997 3.58579 21.9997 5C21.9997 6.41421 21.9997 7.12132 21.4873 7.56066C20.975 8 20.1502 8 18.5008 8C16.8515 8 16.0267 8 15.5144 7.56066C15.002 7.12132 15.002 6.41421 15.002 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.002 19C15.002 17.5858 15.002 16.8787 15.5144 16.4393C16.0267 16 16.8515 16 18.5008 16C20.1502 16 20.975 16 21.4873 16.4393C21.9997 16.8787 21.9997 17.5858 21.9997 19C21.9997 20.4142 21.9997 21.1213 21.4873 21.5607C20.975 22 20.1502 22 18.5008 22C16.8515 22 16.0267 22 15.5144 21.5607C15.002 21.1213 15.002 20.4142 15.002 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.02289 9.99988L7.02288 14M9.01346 12L4.98877 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.02852 17.0356C9.80543 17.0356 12.0566 14.7837 12.0566 12.0059C12.0566 9.22816 9.80543 6.97632 7.02852 6.97632M7.02852 17.0356C4.25162 17.0356 2.00049 14.7837 2.00049 12.0059C2.00049 9.22816 4.25162 6.97632 7.02852 6.97632M7.02852 17.0356C6.95858 19.1654 8.56284 19.9516 9.67576 19.9923H12.0026M7.02852 6.97632C6.95786 4.81624 8.54803 4.05665 9.67576 4.00891H12.0026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StructureAddIcon;
