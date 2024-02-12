import * as React from "react";
import type { SVGProps } from "react";

interface Bus03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bus03Icon = (props: Bus03IconProps) => {
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
        <path d="M6.00391 10V5M11.0039 10V5M16.0039 10V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.01609 17C3.59614 17 2.88616 17 2.44503 16.5607C2.00391 16.1213 2.00391 15.4142 2.00391 14V8C2.00391 6.58579 2.00391 5.87868 2.44503 5.43934C2.88616 5 3.59614 5 5.01609 5H12.1005C15.5742 5 17.311 5 18.6402 5.70624C19.619 6.22633 20.4346 7.0055 20.9971 7.95786C21.7609 9.25111 21.8332 10.9794 21.9779 14.436C22.0168 15.3678 22.0363 15.8337 21.8542 16.1862C21.7204 16.4454 21.5135 16.6601 21.2591 16.8041C20.913 17 20.4449 17 19.5085 17H19.0039M9.00391 17H15.0039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.00391 19C8.10848 19 9.00391 18.1046 9.00391 17C9.00391 15.8954 8.10848 15 7.00391 15C5.89934 15 5.00391 15.8954 5.00391 17C5.00391 18.1046 5.89934 19 7.00391 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.0039 19C18.1085 19 19.0039 18.1046 19.0039 17C19.0039 15.8954 18.1085 15 17.0039 15C15.8993 15 15.0039 15.8954 15.0039 17C15.0039 18.1046 15.8993 19 17.0039 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1.99609 10.001H15.3641C15.9911 10.001 16.2041 10.3682 16.6841 10.9442C17.2361 11.4842 17.6093 11.863 18.1241 11.9402C18.8441 12.0482 21.5081 11.9942 21.5081 11.9942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bus03Icon;
