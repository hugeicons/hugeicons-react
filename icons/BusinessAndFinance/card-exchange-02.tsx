import * as React from "react";
import type { SVGProps } from "react";

interface CardExchange02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CardExchange02Icon = (props: CardExchange02IconProps) => {
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
        <path d="M22 14.0059C22 17.3207 19.3171 20.0018 16 20.0018L16.8571 18.2887" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10.0087C2 6.69376 4.68286 4.0127 8 4.0127L7.14286 5.72584" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9658 5.52418H21.7723M13.4658 10.9944H19.4999C20.8806 10.9944 21.9999 9.87585 21.9999 8.49607V4.49686C21.9999 3.11707 20.8806 1.99854 19.4999 1.99854H13.4658C12.0851 1.99854 10.9658 3.11707 10.9658 4.49686V8.49607C10.9658 9.87585 12.0851 10.9944 13.4658 10.9944Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16.5315H12.8065M4.5 22.0017H10.5341C11.9148 22.0017 13.0341 20.8832 13.0341 19.5034V15.5042C13.0341 14.1244 11.9148 13.0059 10.5341 13.0059H4.5C3.11929 13.0059 2 14.1244 2 15.5042V19.5034C2 20.8832 3.11929 22.0017 4.5 22.0017Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CardExchange02Icon;
