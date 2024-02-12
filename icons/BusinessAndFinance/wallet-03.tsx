import * as React from "react";
import type { SVGProps } from "react";

interface Wallet03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Wallet03Icon = (props: Wallet03IconProps) => {
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
        <path d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0038 7.80257C9.57619 7.42647 5.1047 6.62109 3 5.99976V15.0612C3 17.0556 3 18.0528 3.61958 18.8661C4.23916 19.6794 5.08923 19.9091 6.78937 20.3685C9.53623 21.1107 12.4235 21.5527 15.0106 21.8055C17.6919 22.0675 19.0325 22.1985 20.0163 21.2995C21 20.4005 21 18.9564 21 16.068V14.0544C21 11.2495 21 9.84706 20.1929 8.97664C19.3859 8.10622 17.9252 8.005 15.0038 7.80257Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Wallet03Icon;
