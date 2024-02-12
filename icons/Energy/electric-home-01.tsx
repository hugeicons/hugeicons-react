import * as React from "react";
import type { SVGProps } from "react";

interface ElectricHome01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ElectricHome01Icon = (props: ElectricHome01IconProps) => {
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
        <path d="M20 8.58496V13.5004C20 17.2716 20 19.1573 18.8284 20.3288C18.0203 21.137 16.8723 21.3877 15 21.4654M4 8.58496V13.5004C4 17.2716 4 19.1573 5.17157 20.3288C6.23465 21.3919 7.88563 21.4904 10.9998 21.4995C11.5521 21.5011 12 21.0527 12 20.5004V17.5004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10.5003L17.6569 6.33572C14.9902 3.77873 13.6569 2.50024 12 2.50024C10.3431 2.50024 9.00981 3.77873 6.34315 6.33572L2 10.5003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.001 9.00024V11.5002M10.001 11.5002V9.00024M8.50553 12.3802C8.46629 11.9053 8.87602 11.5002 9.39552 11.5002H14.6104C15.1299 11.5002 15.5396 11.9053 15.5004 12.3802L15.3931 13.6776C15.316 14.6103 14.9786 15.5092 14.4133 16.2878L14.0628 16.7705C13.7319 17.2263 13.1741 17.5002 12.5768 17.5002H11.4291C10.8318 17.5002 10.2741 17.2263 9.94308 16.7705L9.59262 16.2878C9.02726 15.5092 8.68984 14.6103 8.61276 13.6776L8.50553 12.3802Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ElectricHome01Icon;
