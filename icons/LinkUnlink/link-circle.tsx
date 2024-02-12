import * as React from "react";
import type { SVGProps } from "react";

interface LinkCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkCircleIcon = (props: LinkCircleIconProps) => {
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
        <path d="M21.0012 12C21.0012 16.9708 16.9711 21.0004 11.9996 21.0004C7.0282 21.0004 2.99805 16.9708 2.99805 12C2.99805 7.02924 7.0282 2.99963 11.9996 2.99963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5537 3.4689L14.9902 9.01014M20.5537 3.4689C20.0585 2.97374 16.7223 3.0199 16.0171 3.02992M20.5537 3.4689C21.049 3.96406 21.0028 7.29968 20.9928 8.00486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkCircleIcon;
