import * as React from "react";
import type { SVGProps } from "react";

interface SquareSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SquareSquareIcon = (props: SquareSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.35938 10.9956C6.71937 10.9956 7.71214 10.8495 8.07262 11.6116C8.48813 12.4901 9.53007 15.4731 9.77937 16.0716C10.0668 16.7616 10.5114 17.1036 11.6514 16.9836" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.006 10.9844C10.62 10.9844 9.6 13.0724 9.04734 13.9124C8.38719 14.9646 7.32 17.0324 6 16.9844" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 11H15C15 11 17.0049 9.67917 17.2244 9.52908C17.4439 9.37899 18 9.05382 18 8.32833C18 7.60284 17.2751 6.99999 16.5073 7C15.7396 7.00001 15 7.53452 15 8.33583" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SquareSquareIcon;
