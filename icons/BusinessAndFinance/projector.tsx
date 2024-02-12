import * as React from "react";
import type { SVGProps } from "react";

interface ProjectorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ProjectorIcon = (props: ProjectorIconProps) => {
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
        <path d="M19 12C19 14.2091 17.2091 16 15 16C12.7909 16 11 14.2091 11 12C11 9.79086 12.7909 8 15 8C17.2091 8 19 9.79086 19 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 12H19M11 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 16H6.00808" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20L14 20C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ProjectorIcon;
