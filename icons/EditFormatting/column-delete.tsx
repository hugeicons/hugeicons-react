import * as React from "react";
import type { SVGProps } from "react";

interface ColumnDeleteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ColumnDeleteIcon = (props: ColumnDeleteIconProps) => {
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
        <path d="M5.5 3.00024C6.90446 3.00024 7.60669 3.00024 8.11114 3.37944C8.32952 3.54359 8.51702 3.75453 8.66294 4.00021C9 4.56771 9 5.35772 9 6.93774L9 17.0627C9 18.6428 9 19.4328 8.66294 20.0003C8.51702 20.246 8.32952 20.4569 8.11114 20.6211C7.60669 21.0002 6.90446 21.0002 5.5 21.0002C4.09554 21.0002 3.39331 21.0002 2.88886 20.6211C2.67048 20.4569 2.48298 20.246 2.33706 20.0003C2 19.4328 2 18.6428 2 17.0627L2 6.93774C2 5.35772 2 4.56771 2.33706 4.00021C2.48298 3.75453 2.67048 3.54359 2.88886 3.37944C3.39331 3.00024 4.09554 3.00024 5.5 3.00024Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 11.9375L20 17.0625C20 18.6425 20 19.4325 19.6629 20C19.517 20.2457 19.3295 20.4566 19.1111 20.6208C18.6067 21 17.9045 21 16.5 21C15.0955 21 14.3933 21 13.8889 20.6208C13.6705 20.4566 13.483 20.2457 13.3371 20C13 19.4325 13 18.6425 13 17.0625L13 6.9375C13 5.35748 13 4.56747 13.3371 3.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 8.99936L16 3M22 3.00064L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ColumnDeleteIcon;
