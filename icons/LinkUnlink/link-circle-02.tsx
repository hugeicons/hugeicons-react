import * as React from "react";
import type { SVGProps } from "react";

interface LinkCircle02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkCircle02Icon = (props: LinkCircle02IconProps) => {
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
        <path d="M11.1193 2.99756C6.55993 3.45035 2.99902 7.29809 2.99902 11.9777C2.99902 16.9619 7.03855 21.0024 12.0216 21.0024C16.7 21.0024 20.5468 17.4407 20.9996 12.8802" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5581 3.49381L11.0488 13.059M20.5581 3.49381C20.064 2.99905 16.7356 3.04517 16.032 3.05518M20.5581 3.49381C21.0521 3.98857 21.0061 7.3215 20.9961 8.02611" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkCircle02Icon;
