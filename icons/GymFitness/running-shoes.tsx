import * as React from "react";
import type { SVGProps } from "react";

interface RunningShoesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RunningShoesIcon = (props: RunningShoesIconProps) => {
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
        <path d="M19.1012 18H7.96299C5.02913 18 3.56221 18 2.66807 16.8828C0.97093 14.7623 2.9047 9.1238 4.07611 7C4.47324 9.4 8.56152 9.33333 10.0507 9C9.05852 7.00119 10.3831 6.33413 11.0453 6.00059L11.0465 6C14 9.5 20.3149 11.404 21.8624 15.2188C22.5309 16.8667 20.6262 18 19.1012 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 14C6.16467 15.4294 8.73097 15.8442 12.0217 14.8039C13.0188 14.4887 13.5174 14.3311 13.8281 14.3525C14.1389 14.3739 14.7729 14.6695 16.0408 15.2608C17.6243 15.9992 19.7971 16.4243 22 15.3583" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.5 9.5L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 11L17 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RunningShoesIcon;
