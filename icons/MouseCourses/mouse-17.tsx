import * as React from "react";
import type { SVGProps } from "react";

interface Mouse17IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse17Icon = (props: Mouse17IconProps) => {
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
        <path d="M12 5V2M12 12V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.87257 3.33256L10.3339 2.4595C11.3594 1.84683 12.6406 1.84683 13.6661 2.4595L15.1274 3.33256C18.847 5.55476 20.1003 10.3299 17.9482 14.08C17.9114 14.1441 17.8857 14.2138 17.872 14.2864L17.2339 17.6748C17.174 17.9931 17.1441 18.1522 17.1094 18.291C16.5906 20.3673 14.7763 21.8666 12.6311 21.9916C12.4877 22 12.3252 22 12 22C11.6748 22 11.5123 22 11.3689 21.9916C9.22372 21.8666 7.40941 20.3673 6.89063 18.291C6.85595 18.1522 6.82599 17.9931 6.76606 17.6748L6.12799 14.2864C6.11434 14.2138 6.08859 14.1441 6.05182 14.08C3.89969 10.3299 5.15297 5.55476 8.87257 3.33256Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 15C16.6595 13.1832 14.4715 12 12 12C9.52848 12 7.34053 13.1832 6 15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 6.5C10.5 6.03406 10.5 5.80109 10.5761 5.61732C10.6776 5.37229 10.8723 5.17761 11.1173 5.07612C11.3011 5 11.5341 5 12 5C12.4659 5 12.6989 5 12.8827 5.07612C13.1277 5.17761 13.3224 5.37229 13.4239 5.61732C13.5 5.80109 13.5 6.03406 13.5 6.5V7.5C13.5 7.96594 13.5 8.19891 13.4239 8.38268C13.3224 8.62771 13.1277 8.82239 12.8827 8.92388C12.6989 9 12.4659 9 12 9C11.5341 9 11.3011 9 11.1173 8.92388C10.8723 8.82239 10.6776 8.62771 10.5761 8.38268C10.5 8.19891 10.5 7.96594 10.5 7.5V6.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Mouse17Icon;
