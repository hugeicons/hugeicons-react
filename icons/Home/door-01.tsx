import * as React from "react";
import type { SVGProps } from "react";

interface Door01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Door01Icon = (props: Door01IconProps) => {
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
        <path d="M4 9.20433C4 7.13117 4 6.09459 4.35762 5.25272C4.65634 4.54951 5.1278 3.94591 5.7219 3.50609C6.43314 2.97955 7.38764 2.79412 9.29665 2.42326C11.2817 2.03762 12.2743 1.8448 13.0467 2.15208C13.6884 2.40733 14.229 2.88944 14.5789 3.51833C15 4.27538 15 5.35327 15 7.50906V16.4909C15 18.6467 15 19.7246 14.5789 20.4817C14.229 21.1106 13.6884 21.5927 13.0467 21.8479C12.2743 22.1552 11.2817 21.9624 9.29665 21.5767C7.38764 21.2059 6.43314 21.0205 5.7219 20.4939C5.1278 20.0541 4.65634 19.4505 4.35762 18.7473C4 17.9054 4 16.8688 4 14.7957V9.20433Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 19.7982C16.4473 19.9487 18.3999 20.4116 19.4375 19.0885C20 18.3712 20 17.2786 20 15.0934V8.90664C20 6.72138 20 5.62876 19.4375 4.91152C18.3999 3.58841 16.4473 4.05129 15 4.20177" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 13L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 19.7266L22 19.7266" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 20H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Door01Icon;
