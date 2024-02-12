import * as React from "react";
import type { SVGProps } from "react";

interface Bug01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bug01Icon = (props: Bug01IconProps) => {
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
        <path d="M3.01321 4.99121C2.89335 6.05121 3.55262 8.42321 6.48936 8.42321" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5952 8.38093C18.8358 8.57893 21.1133 7.49893 20.9958 5.00293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.993 20.9989C21.0529 19.9429 20.1779 17.5549 17.5991 17.4229" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.45175 17.471C5.65026 17.231 3.01318 18.335 3.01318 20.999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.33002 6.11902C9.354 5.09902 9.84545 2.99902 12.0031 2.99902C13.9209 2.99902 14.5862 4.61902 14.6761 6.11902M6.26143 9.41902C6.3813 8.63902 7.29229 6.81502 9.36598 6.63502C11.4637 6.55582 14.3405 6.58702 14.8799 6.67102C15.587 6.73395 17.2952 7.43902 17.7507 9.41902C17.9125 10.439 17.8286 11.879 17.8526 12.719C17.8166 13.559 17.9208 15.2624 17.7567 16.139C17.6368 17.099 16.9895 18.467 16.1025 19.307C14.784 20.723 11.164 22.211 8.03546 19.451C6.41726 17.891 6.30938 16.379 6.18951 15.779C6.15738 15.4573 6.15887 13.8765 6.16554 12.359C6.14156 11.0462 6.17247 9.78082 6.26143 9.41902Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.01318 12.8989H5.94992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.993 12.8989L18.1162 12.8989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0034 16.499L12.0034 20.279" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bug01Icon;
