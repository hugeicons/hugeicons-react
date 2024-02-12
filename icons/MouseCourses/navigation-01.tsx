import * as React from "react";
import type { SVGProps } from "react";

interface Navigation01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Navigation01Icon = (props: Navigation01IconProps) => {
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
        <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.00019 12.0504C1.96622 11.0147 6.45448 8.57937 6.87722 9.06275C7.3566 9.61089 6.21047 11.2397 5.95232 11.7584C5.79708 12.0703 5.80134 12.2056 5.97785 12.5172C6.77726 13.9283 7.17382 14.6313 6.92737 14.9352C6.53453 15.4197 2.03334 13.0611 2.00019 12.0504Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9496 21.9998C12.9853 22.0338 15.4206 17.5455 14.9373 17.1228C14.3891 16.6434 12.7603 17.7895 12.2416 18.0477C11.9297 18.2029 11.7944 18.1987 11.4828 18.0221C10.0717 17.2227 9.36869 16.8262 9.06478 17.0726C8.58035 17.4655 10.9389 21.9667 11.9496 21.9998Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.9998 12.0504C22.0338 11.0147 17.5455 8.57937 17.1228 9.06275C16.6434 9.61089 17.7895 11.2397 18.0477 11.7584C18.2029 12.0703 18.1987 12.2056 18.0221 12.5172C17.2227 13.9283 16.8262 14.6313 17.0726 14.9352C17.4655 15.4197 21.9667 13.0611 21.9998 12.0504Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9496 2.00019C12.9853 1.96622 15.4206 6.45448 14.9373 6.87722C14.3891 7.3566 12.7603 6.21047 12.2416 5.95232C11.9297 5.79708 11.7944 5.80134 11.4828 5.97785C10.0717 6.77726 9.36869 7.17382 9.06478 6.92737C8.58035 6.53453 10.9389 2.03334 11.9496 2.00019Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Navigation01Icon;
