import * as React from "react";
import type { SVGProps } from "react";

interface Disability02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Disability02Icon = (props: Disability02IconProps) => {
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
        <path d="M11.5 10L9.5 9L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 19.4826C14.3982 21.0072 12.6003 22 10.5696 22C7.21743 22 4.5 19.295 4.5 15.9582C4.5 15.0829 4.66357 14.251 5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6493 8L11.8965 9.84615C11.1304 11.7248 10.7474 12.6641 11.1832 13.3321C11.619 14 12.6149 14 14.6067 14C15.3014 14 15.9714 13.8192 16.3579 14.4961L19.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Disability02Icon;
