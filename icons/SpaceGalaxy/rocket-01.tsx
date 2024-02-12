import * as React from "react";
import type { SVGProps } from "react";

interface Rocket01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Rocket01Icon = (props: Rocket01IconProps) => {
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
        <path d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.9959 7H17.0049" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 21.5L7.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 21.5L10.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 15.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Rocket01Icon;
