import * as React from "react";
import type { SVGProps } from "react";

interface BoxingGlove01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BoxingGlove01Icon = (props: BoxingGlove01IconProps) => {
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
        <path d="M5.98157 11.2462C5.89455 13.9687 9.10265 17.3243 12.1106 18.3792M5.98157 11.2462C5.67701 11.7689 2.56621 14.2627 2.51182 15.319C2.24825 17.4168 5.81231 21.3578 8.56034 21.4924C9.58656 21.638 11.01 19.9111 12.4529 18.6281C13.2476 17.9214 14.3929 17.7579 18.9773 16.6203C20.6409 16.3311 22.6395 13.4615 19.6767 11.0291M5.98157 11.2462C6.90979 9.045 8.51447 4.7897 11.6615 3.10928C12.9395 2.38315 16.2589 1.71458 19.5115 4.80677C20.6305 5.74787 22.5702 7.80934 20.7648 10.1845C19.5611 11.5873 17.7411 11.1812 17.5643 13.6073" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BoxingGlove01Icon;
