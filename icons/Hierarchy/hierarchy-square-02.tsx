import * as React from "react";
import type { SVGProps } from "react";

interface HierarchySquare02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HierarchySquare02Icon = (props: HierarchySquare02IconProps) => {
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
        <path d="M12 8V12M12 12H9C7.11438 12 6.17157 12 5.58579 12.5858C5 13.1716 5 14.1144 5 16M12 12H15C16.8856 12 17.8284 12 18.4142 12.5858C19 13.1716 19 14.1144 19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 19C2 17.5858 2 16.8787 2.43934 16.4393C2.87868 16 3.58579 16 5 16C6.41421 16 7.12132 16 7.56066 16.4393C8 16.8787 8 17.5858 8 19C8 20.4142 8 21.1213 7.56066 21.5607C7.12132 22 6.41421 22 5 22C3.58579 22 2.87868 22 2.43934 21.5607C2 21.1213 2 20.4142 2 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.5607 21.5607C21.1213 22 20.4142 22 19 22C17.5858 22 16.8787 22 16.4393 21.5607C16 21.1213 16 20.4142 16 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.2857 2H13.7143C15.7888 2 16 3.10993 16 5C16 6.89007 15.7888 8 13.7143 8H10.2857C8.2112 8 8 6.89007 8 5C8 3.10993 8.2112 2 10.2857 2Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HierarchySquare02Icon;
