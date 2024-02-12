import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare03Icon = (props: HierarchySquare03IconProps) => {
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
        <path d="M8 6C8 4.11438 8 3.17157 8.58579 2.58579C9.17157 2 10.1144 2 12 2C13.8856 2 14.8284 2 15.4142 2.58579C16 3.17157 16 4.11438 16 6C16 7.88562 16 8.82843 15.4142 9.41421C14.8284 10 13.8856 10 12 10C10.1144 10 9.17157 10 8.58579 9.41421C8 8.82843 8 7.88562 8 6Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 16C18.8172 13.547 17.7969 13 14.3472 13L12 13L9.65278 13C6.20315 13 5.1828 13.547 5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HierarchySquare03Icon;
