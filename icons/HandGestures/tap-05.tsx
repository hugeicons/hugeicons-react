import * as React from "react";
import type { SVGProps } from "react";

interface Tap05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap05Icon = (props: Tap05IconProps) => {
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
        <path d="M13.9836 6.01135C13.9836 3.79648 12.2046 2.00098 10.0101 2.00098C7.81562 2.00098 6.03662 3.79648 6.03662 6.01135" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.37586 21.992L9.27144 20.8962C8.78388 18.8788 8.11756 18.6129 7.03282 17.167C6.54311 16.5142 5.51981 15.5893 4.68318 14.3399C4.12572 13.5073 4.86959 11.6148 6.56547 12.1918C6.84776 12.2878 7.08506 12.4802 7.29545 12.6915L8.94192 14.3452C8.92845 12.0076 8.95844 7.24886 8.92212 5.78854C8.8858 4.32822 11.4199 3.85831 11.5692 5.8549V10.3463M11.5692 10.3463V11.212M11.5692 10.3463C12.3979 9.24829 13.9659 9.20964 14.1941 11.0478M14.1941 11.0478C14.2312 11.3471 14.2341 11.6967 14.1941 12.1003M14.1941 11.0478C14.6128 9.76361 16.4521 10.2735 16.8181 11.7682M16.8181 11.7682C16.9049 12.1225 16.8181 12.5325 16.853 13.0059M16.8181 11.7682C17.0558 11.0478 19.684 10.9946 19.434 13.7775L19.4995 16.3014C19.399 17.8084 19.1778 18.4398 18.6363 19.1682C18.3557 19.5458 17.9876 19.8783 17.8471 20.3273C17.7292 20.7035 17.655 21.2542 17.7363 21.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tap05Icon;
