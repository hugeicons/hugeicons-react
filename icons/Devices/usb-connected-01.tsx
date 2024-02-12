import * as React from "react";
import type { SVGProps } from "react";

interface UsbConnected01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UsbConnected01Icon = (props: UsbConnected01IconProps) => {
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
        <path d="M10.9838 16.5H9.01625C7.99228 16.5 7.03617 15.9979 6.46881 15.1622L5.86803 14.2773C4.89885 12.8498 4.32041 11.2019 4.18827 9.49197L4.00446 7.11331C3.93719 6.24273 4.63957 5.5 5.53014 5.5H14.4699C15.3604 5.5 16.0628 6.24273 15.9955 7.11331L15.927 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 6V5.5C13.5 4.09554 13.5 3.39331 13.1629 2.88886C13.017 2.67048 12.8295 2.48298 12.6111 2.33706C12.1067 2 11.4045 2 10 2C8.59554 2 7.89331 2 7.38886 2.33706C7.17048 2.48298 6.98298 2.67048 6.83706 2.88886C6.5 3.39331 6.5 4.09554 6.5 5.5V6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 17V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13.5C12 13.5 13 13.5 14 15.5C14 15.5 17.1765 10.5 20 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UsbConnected01Icon;
