import * as React from "react";
import type { SVGProps } from "react";

interface Baby02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Baby02Icon = (props: Baby02IconProps) => {
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
        <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.874 12C17.5826 13.037 18 14.3093 18 15.6842C18 16.5017 17.8524 17.2829 17.5838 18M7.12605 12C6.41738 13.037 6 14.3093 6 15.6842C6 19.1723 8.68629 22 12 22C14.5371 22 16.7064 20.3424 17.5838 18M17.5838 18C14.8509 16.8 12.0559 14.8333 11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0002 2C11.0061 2 10.2002 2.7835 10.2002 3.75C10.2002 4.7165 11.0061 5.5 12.0002 5.5C12.4612 5.5 12.8817 5.3315 13.2002 5.0544" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 8H10.0081M14 8H14.0081" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Baby02Icon;
