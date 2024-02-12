import * as React from "react";
import type { SVGProps } from "react";

interface PathfinderMinusBackIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PathfinderMinusBackIcon = (props: PathfinderMinusBackIconProps) => {
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
        <path d="M15 9.00017C15.1616 9 15.3282 9 15.5 9C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5C9 15.3282 9 15.1616 9.00017 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9.00017C14.9973 11.4868 14.9536 12.7833 14.2366 13.6824C14.0732 13.8873 13.8873 14.0732 13.6824 14.2366C12.7833 14.9536 11.4868 14.9973 9.00017 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 9.5L2 7.5M7.5 2L9.5 2M2 12C2.06547 12.8804 2.22182 13.4751 2.59527 13.9421C2.73274 14.114 2.88914 14.27 3.06153 14.4071C3.52821 14.7782 4.12216 14.9343 5 15L5.5 15M2 5C2.06568 4.12216 2.22181 3.52821 2.59294 3.06153C2.73003 2.88914 2.88599 2.73274 3.0579 2.59527C3.52488 2.22182 4.11965 2.06546 5 2M12 2C12.8778 2.06568 13.4718 2.22181 13.9385 2.59294C14.1109 2.73003 14.2673 2.88599 14.4047 3.0579C14.7782 3.52488 14.9345 4.11965 15 5L15 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PathfinderMinusBackIcon;
