import * as React from "react";
import type { SVGProps } from "react";

interface UsbConnected03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UsbConnected03Icon = (props: UsbConnected03IconProps) => {
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
        <path d="M15.012 11.5005C15.012 9.61487 15.012 8.67206 14.4256 8.08628C13.8391 7.50049 12.8953 7.50049 11.0076 7.50049H9.0054C7.11769 7.50049 6.17384 7.50049 5.58741 8.08628C5.00098 8.67206 5.00098 9.61487 5.00098 11.5005V17.0005C5.00098 17.9298 5.00098 18.3945 5.07792 18.7809C5.3939 20.3676 6.63566 21.608 8.22418 21.9236C8.53447 21.9853 8.89518 21.9975 9.50595 21.9999" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5097 7.50049V5.50049C13.5097 4.09603 13.5097 3.3938 13.1722 2.88935C13.0262 2.67097 12.8385 2.48347 12.6198 2.33755C12.1149 2.00049 11.4119 2.00049 10.0058 2.00049C8.59981 2.00049 7.8968 2.00049 7.3918 2.33755C7.17317 2.48347 6.98547 2.67097 6.83939 2.88935C6.50195 3.3938 6.50195 4.09603 6.50195 5.50049V7.50049" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.50098 4.50049H10.501" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6439 18.4257C13.6439 18.4257 14.0214 18.541 14.5456 19.3089C14.5456 19.3089 15.3144 17.6509 16.3802 17.075M18.9997 18.0164C18.9997 20.2163 17.2143 21.9997 15.0121 21.9997C12.8098 21.9997 11.0244 20.2163 11.0244 18.0164C11.0244 15.8166 12.8098 14.0332 15.0121 14.0332C17.2143 14.0332 18.9997 15.8166 18.9997 18.0164Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UsbConnected03Icon;
