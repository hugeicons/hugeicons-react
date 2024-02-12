import * as React from "react";
import type { SVGProps } from "react";

interface Stamp01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Stamp01Icon = (props: Stamp01IconProps) => {
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
        <path d="M4.98535 19.1814C5.00117 20.4212 5.08227 20.9433 5.49813 21.4148C6.01474 22.0006 6.84621 22.0006 8.50915 22.0006H15.4615C17.1244 22.0006 17.9559 22.0006 18.4725 21.4148C18.8884 20.9433 18.9695 20.4212 18.9853 19.1814" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9883 19.0705L4.7566 19.0706C4.03862 19.0706 3.41754 18.4849 3.50777 17.7727C3.66683 16.5171 4.30521 14.9993 6.83565 14.0659C7.7252 13.7378 8.70464 13.4537 9.18724 12.6376C9.8646 11.4921 10.1631 10.2384 8.89973 8.08814C6.83565 4.02035 9.92403 1.99927 12.011 1.99927C14.0979 1.99927 17.1485 4.14874 15.0639 8.08814C13.7982 10.2209 14.1346 11.4921 14.812 12.6376C15.2946 13.4537 16.2741 13.7378 17.1636 14.0659C19.694 14.9993 20.3324 16.5171 20.4915 17.7727C20.5817 18.4849 19.9606 19.0706 19.2427 19.0706L12.011 19.0705" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Stamp01Icon;
