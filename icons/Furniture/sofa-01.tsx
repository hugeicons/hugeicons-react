import * as React from "react";
import type { SVGProps } from "react";

interface Sofa01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sofa01Icon = (props: Sofa01IconProps) => {
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
        <path d="M6 17V20M18 17V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 9C20 7.13077 20 6.19615 19.5981 5.5C19.3348 5.04394 18.9561 4.66523 18.5 4.40192C17.8038 4 16.8692 4 15 4H9C7.13077 4 6.19615 4 5.5 4.40192C5.04394 4.66523 4.66523 5.04394 4.40192 5.5C4 6.19615 4 7.13077 4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 9C18.8954 9 18 9.89543 18 11V13C18 13.8273 17.8273 14 17 14H7C6.17267 14 6 13.8273 6 13V11C6 9.89543 5.10457 9 4 9C2.89543 9 2 9.89543 2 11C2 11.7403 2.4022 12.3866 3 12.7324V13C3 14.8856 3 15.8284 3.58579 16.4142C4.17157 17 5.11438 17 7 17H17C18.8856 17 19.8284 17 20.4142 16.4142C21 15.8284 21 14.8856 21 13V12.7324C21.5978 12.3866 22 11.7403 22 11C22 9.89543 21.1046 9 20 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sofa01Icon;
