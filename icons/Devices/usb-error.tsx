import * as React from "react";
import type { SVGProps } from "react";

interface UsbErrorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UsbErrorIcon = (props: UsbErrorIconProps) => {
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
        <path d="M13.9734 10.5014C13.9554 9.26104 13.8637 8.55783 13.3931 8.08606C12.8086 7.5 11.8678 7.5 9.98623 7.5H7.99049C6.10889 7.5 5.16809 7.5 4.58356 8.08606C3.99902 8.67212 3.99902 9.61538 3.99902 11.5019V17.0045C3.99902 17.9342 3.99902 18.3991 4.07572 18.7857C4.39068 20.3732 5.62842 21.6141 7.2118 21.9299C7.42549 21.9725 7.66318 21.9915 7.99049 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4812 7.5V5.5C12.4812 4.09554 12.4812 3.39331 12.1448 2.88886C11.9992 2.67048 11.8121 2.48298 11.5942 2.33706C11.0908 2 10.3901 2 8.98863 2C7.58716 2 6.88643 2 6.38306 2.33706C6.16514 2.48298 5.97804 2.67048 5.83243 2.88886C5.49609 3.39331 5.49609 4.09554 5.49609 5.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.49902 4.5H9.49902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9741 16.3513V17.6429M14.9656 19.7498H14.9859M12.0072 22.0001H17.8914C19.4595 22.0001 20.5442 20.2711 19.7123 18.9391L18.2726 16.3859L16.7679 14.0065C15.9469 12.6919 14.0361 12.6919 13.2152 14.0065C12.8684 14.5617 12.267 15.455 11.7229 16.3859C11.4234 16.8983 11.137 17.4118 10.9017 17.8425C10.5044 18.5698 9.95813 19.2976 10.0126 20.125C10.0778 21.1159 10.8859 22.0001 12.0072 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default UsbErrorIcon;
