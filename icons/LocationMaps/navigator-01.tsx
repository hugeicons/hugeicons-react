import * as React from "react";
import type { SVGProps } from "react";

interface Navigator01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Navigator01Icon = (props: Navigator01IconProps) => {
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
        <path d="M4 3V21M20 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.66101 16.8652C10.6709 14.9551 11.1759 14 12 14C12.8241 14 13.3291 14.9551 14.339 16.8652L15.0267 18.166C15.8023 19.6329 16.1901 20.3664 15.9082 20.7191C15.8324 20.8139 15.7325 20.8921 15.6163 20.9476C15.1841 21.1541 14.3908 20.7381 12.8043 19.9062C12.4524 19.7216 12.2764 19.6294 12.084 19.6129C12.0281 19.6081 11.9719 19.6081 11.916 19.6129C11.7236 19.6294 11.5476 19.7216 11.1957 19.9062C9.60915 20.7381 8.81587 21.1541 8.38372 20.9476C8.26754 20.8921 8.16764 20.8139 8.09184 20.7191C7.80989 20.3664 8.19769 19.6329 8.97329 18.166L9.66101 16.8652Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Navigator01Icon;
