import * as React from "react";
import type { SVGProps } from "react";

interface HospitalLocationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HospitalLocationIcon = (props: HospitalLocationIconProps) => {
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
        <path d="M12.5 2C7.80558 2 4 5.61783 4 10.0807C4 12.6325 5.0625 14.6167 7.1875 16.389C8.68532 17.6382 10.4999 19.7131 11.5893 21.3951C12.1118 22.2016 12.8507 22.2016 13.4107 21.3951C14.5553 19.7466 16.3147 17.6382 17.8125 16.389C19.9375 14.6167 21 12.6325 21 10.0807C21 5.61783 17.1944 2 12.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.5 7V10M10.5 13V10M14.5 7V10M14.5 13V10M14.5 10H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default HospitalLocationIcon;
