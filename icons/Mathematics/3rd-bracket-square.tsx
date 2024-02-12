import * as React from "react";
import type { SVGProps } from "react";

interface ThirdBracketSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThirdBracketSquareIcon = (props: ThirdBracketSquareIconProps) => {
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
        <path d="M14 16C14.9241 16 15.6733 15.4883 15.6733 14.8571C15.6733 13.6365 15.6869 13.1336 16.755 12.4041C17.0817 12.1809 17.0817 11.8191 16.755 11.5959C15.6869 10.8664 15.6733 10.3635 15.6733 9.14286C15.6733 8.51167 14.9241 8 14 8M10 16C9.07588 16 8.32673 15.4883 8.32673 14.8571C8.32673 13.6365 8.31312 13.1336 7.24505 12.4041C6.91832 12.1809 6.91832 11.8191 7.24504 11.5959C8.31312 10.8664 8.32673 10.3635 8.32673 9.14286C8.32673 8.51167 9.07588 8 10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ThirdBracketSquareIcon;
