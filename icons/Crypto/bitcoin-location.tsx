import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinLocationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinLocationIcon = (props: BitcoinLocationIconProps) => {
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
        <path d="M18 18.2676C19.2447 18.6636 20 19.1837 20 19.7534C20 20.9941 16.4183 21.9998 12 21.9998C7.58172 21.9998 4 20.9941 4 19.7534C4 19.1837 4.75527 18.6636 6 18.2676" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4375 11.6667L10.4375 6.33333M12 6.33333V5M12 13V11.6667M10.4375 9H13.5625M13.5625 9C14.0803 9 14.5 9.44772 14.5 10V10.6667C14.5 11.219 14.0803 11.6667 13.5625 11.6667H9.5M13.5625 9C14.0803 9 14.5 8.55228 14.5 8V7.33333C14.5 6.78105 14.0803 6.33333 13.5625 6.33333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.3471 18.4619C12.9857 18.8071 12.5027 19 12 19C11.4973 19 11.0143 18.8071 10.6529 18.4619C7.34373 15.2821 2.90897 11.7299 5.07167 6.57272C6.24102 3.78428 9.04799 2 12 2C14.952 2 17.759 3.78428 18.9283 6.57272C21.0883 11.7234 16.6644 15.293 13.3471 18.4619Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default BitcoinLocationIcon;
