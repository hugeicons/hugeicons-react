import * as React from "react";
import type { SVGProps } from "react";

interface Pizza01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Pizza01Icon = (props: Pizza01IconProps) => {
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
        <path d="M10.2201 18.821L18.6793 13.1312C20.1246 12.159 20.8472 11.673 20.9785 10.7879C21.1098 9.90283 20.6352 9.30806 19.686 8.11852C17.5076 5.3886 14.548 3.35345 11.1624 2.38141C9.87428 2.01158 9.23023 1.82667 8.53978 2.2186C7.84933 2.61053 7.62404 3.37564 7.17348 4.90586L4.40648 14.3032C3.11201 18.6995 2.46477 20.8977 3.54764 21.7392C4.63051 22.5807 6.49371 21.3275 10.2201 18.821Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 5C7.5 5 8.03795 5.1182 8.90014 5.38146C11.6322 6.21565 14.0691 7.83278 16 10.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.008 11H12.999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.28358 7.95361C7.35945 8.24857 8.04421 9.23191 8.04421 10.4269C8.04421 12.0941 6.42426 13.3683 4.82422 12.9138" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.22322 18.7486C7.67104 17.7793 7.8218 16.5081 8.66679 15.6631C9.67553 14.6544 11.2917 14.635 12.2765 15.6199C12.4419 15.7853 12.579 15.9685 12.6879 16.1637" stroke="currentColor" strokeLinecap="round" />
        <path d="M12.923 16.9934C12.6268 15.8483 11.6582 15.0088 10.5091 15.0088C9.12442 15.0088 8.00195 16.2276 8.00195 17.7311C8.00195 18.5277 8.31703 19.2444 8.81923 19.7422" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Pizza01Icon;
