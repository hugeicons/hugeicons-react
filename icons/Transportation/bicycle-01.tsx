import * as React from "react";
import type { SVGProps } from "react";

interface Bicycle01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bicycle01Icon = (props: Bicycle01IconProps) => {
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
        <path d="M6 20.0029C8.20914 20.0029 10 18.2121 10 16.0029C10 13.7938 8.20914 12.0029 6 12.0029C3.79086 12.0029 2 13.7938 2 16.0029C2 18.2121 3.79086 20.0029 6 20.0029Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 20.0029C20.2091 20.0029 22 18.2121 22 16.0029C22 13.7938 20.2091 12.0029 18 12.0029C15.7909 12.0029 14 13.7938 14 16.0029C14 18.2121 15.7909 20.0029 18 20.0029Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16.0029H10.3706C10.7302 16.0029 11.0622 15.8098 11.2399 15.4971L15.5 8.00293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13.0029L7 7.00293M7 7.00293H5M7 7.00293H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.0039 6.21862C19.7999 5.64262 19.4399 4.74262 18.2399 4.32262C17.4599 4.02262 15.5399 3.90262 15.2999 4.08262C14.9527 4.16943 14.9399 4.56262 15.1079 5.10262C15.2444 5.68157 15.4559 6.42818 15.6479 7.14262C16.1399 8.97342 17.2199 12.9386 18.0239 15.9986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bicycle01Icon;
