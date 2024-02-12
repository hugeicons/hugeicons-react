import * as React from "react";
import type { SVGProps } from "react";

interface ImageDone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageDone01Icon = (props: ImageDone01IconProps) => {
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
        <path d="M11.5 3.00024C7.02166 3.00024 4.78249 3.00024 3.39124 4.39149C2 5.78273 2 8.0219 2 12.5002C2 16.9786 2 19.2178 3.39124 20.609C4.78249 22.0002 7.02166 22.0002 11.5 22.0002C15.9783 22.0002 18.2175 22.0002 19.6088 20.609C21 19.2178 21 16.9786 21 12.5002C21 11.14 21 9.98632 20.961 9.00024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5 21.5002C8.87246 16.2752 13.7741 9.38425 20.9975 14.0426" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 6.00024C14 6.00024 15 6.00024 16 8.00024C16 8.00024 19.1765 3.00024 22 2.00024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ImageDone01Icon;
