import * as React from "react";
import type { SVGProps } from "react";

interface GeologyCrustIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GeologyCrustIcon = (props: GeologyCrustIconProps) => {
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
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9997 18.5C10.4912 18.5 9.10269 17.9861 7.99972 17.1238M11.9997 5.5C9.10768 5.5 6.65678 7.38874 5.81322 10M6.23193 15C5.91116 14.3845 5.68601 13.7113 5.57617 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5.49906C13.6241 5.61507 16.1849 5.23044 17.052 3.36719M20.0683 6.09014C19.6281 6.50486 19.1018 6.84862 18.5 6.99906C16.5 7.49906 14.5 8.99906 16 10.9991C17.5 12.9991 19 14.4991 17.5 16.4991C16.7608 17.4846 16.2402 19.1441 18.2806 19.7811" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GeologyCrustIcon;
