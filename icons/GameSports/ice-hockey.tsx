import * as React from "react";
import type { SVGProps } from "react";

interface IceHockeyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IceHockeyIcon = (props: IceHockeyIconProps) => {
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
        <path d="M14.6341 16.5168L22 3M17.5475 3L12.3738 12.7865C11.7391 13.9871 11.3456 14.149 10.0348 13.749C8.36082 13.2381 5.01415 11.4686 3.34756 12.2423C1.6805 13.0162 1.54011 18.1781 3.03845 19.2361C4.71629 20.4208 9.68674 19.9937 11.7961 19.5103" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13L6 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 19C12 17.3453 12.3453 17 14 17H18C19.6547 17 20 17.3453 20 19C20 20.6547 19.6547 21 18 21H14C12.3453 21 12 20.6547 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default IceHockeyIcon;
