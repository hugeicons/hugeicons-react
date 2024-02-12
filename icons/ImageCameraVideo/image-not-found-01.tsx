import * as React from "react";
import type { SVGProps } from "react";

interface ImageNotFound01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageNotFound01Icon = (props: ImageNotFound01IconProps) => {
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
        <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 14.1354C2.66663 14.0455 3.3406 14.0011 4.01569 14.0027C6.87163 13.9466 9.65761 14.7729 11.8765 16.3342C13.9345 17.7821 15.3805 19.7749 16 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.5 17.5C14.5 16.5 15.1772 16.2768 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20.2132C18.6012 21.5001 16.3635 21.5001 12 21.5001C7.52166 21.5001 5.28249 21.5001 3.89124 20.1089C2.5 18.7176 2.5 16.4785 2.5 12.0001C2.5 7.63653 2.5 5.39882 3.78701 4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.0002 16C20.5427 16 21.048 16.2945 21.3967 16.5638C21.5 15.3693 21.5 13.8825 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C9.59086 2.5 7.82972 2.5 6.5 2.71659" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ImageNotFound01Icon;
