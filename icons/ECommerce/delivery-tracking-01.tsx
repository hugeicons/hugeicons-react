import * as React from "react";
import type { SVGProps } from "react";

interface DeliveryTracking01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliveryTracking01Icon = (props: DeliveryTracking01IconProps) => {
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
        <path d="M12.5 22H10.8889C6.69863 22 4.6035 22 3.30175 20.7447C2 19.4895 2 17.4692 2 13.4286V8H22V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 12C15.7909 12 14 13.8089 14 16.0403C14 17.3163 14.5 18.3083 15.5 19.1945C16.2049 19.8191 17.0588 20.8566 17.5714 21.6975C17.8173 22.1008 18.165 22.1008 18.4286 21.6975C18.9672 20.8733 19.7951 19.8191 20.5 19.1945C21.5 18.3083 22 17.3163 22 16.0403C22 13.8089 20.2091 12 18 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 16H18.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DeliveryTracking01Icon;
