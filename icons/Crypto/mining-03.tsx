import * as React from "react";
import type { SVGProps } from "react";

interface Mining03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mining03Icon = (props: Mining03IconProps) => {
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
        <path d="M16.9447 20.6667V15.3333M18.5053 15.3333V14M18.5053 22V20.6667M16.9447 18H20.0659M20.0659 18C20.5831 18 21.0023 18.4477 21.0023 19V19.6667C21.0023 20.219 20.5831 20.6667 20.0659 20.6667H16.0083M20.0659 18C20.5831 18 21.0023 17.5523 21.0023 17V16.3333C21.0023 15.781 20.5831 15.3333 20.0659 15.3333H16.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6957 4.18605C13.2953 3.31449 9.70086 1.64154 6.4631 2.06854C8.42161 3.43854 9.45194 4.17541 12.2315 6.68896M18.5674 8.11851C18.9394 8.73509 19.5618 9.92878 19.9976 11.1718M16.1032 10.6214C16.3449 10.8972 16.639 11.3118 16.8496 11.5563M10.3552 10.4183L3.4148 17.4677C2.85184 18.0395 2.86029 18.9751 3.43369 19.5575C4.00708 20.1399 4.92828 20.1485 5.49125 19.5767L12.4316 12.5274M11.8455 8.22564L14.5902 11.0134C14.8949 11.3229 15.3879 11.3241 15.6913 11.0159L19.0917 7.5622C19.395 7.25405 19.3939 6.75331 19.0892 6.44376L16.3445 3.65604C16.0398 3.34649 15.5468 3.34535 15.2434 3.6535L11.843 7.10721C11.5397 7.41535 11.5408 7.91609 11.8455 8.22564Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mining03Icon;
