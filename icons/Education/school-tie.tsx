import * as React from "react";
import type { SVGProps } from "react";

interface SchoolTieIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SchoolTieIcon = (props: SchoolTieIconProps) => {
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
        <path d="M11.9458 6L9.58384 17.0855C9.39588 17.9677 9.49933 18.298 10.1472 18.9315L12.7673 21.4934C13.1127 21.8311 13.2854 22 13.5 22C13.7146 22 13.8873 21.8311 14.2327 21.4934L16.8528 18.9315C17.5007 18.298 17.6041 17.9677 17.4162 17.0855L15.0542 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5568 3.12403C10.4894 2.60014 10.4557 2.3382 10.6093 2.1691C10.763 2 11.0347 2 11.5781 2H15.4219C15.9653 2 16.237 2 16.3907 2.1691C16.5443 2.3382 16.5106 2.60014 16.4432 3.12403L16.3924 3.51931C16.2498 4.62718 16.1786 5.18111 15.8224 5.54049C15.7645 5.59888 15.7018 5.65262 15.635 5.70117C15.2238 6 14.6492 6 13.5 6C12.3508 6 11.7762 6 11.365 5.70117C11.2982 5.65262 11.2355 5.59888 11.1776 5.54049C10.8214 5.18111 10.7502 4.62718 10.6076 3.5193L10.5568 3.12403Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15C9.39225 15.6925 8.87761 16 8.5 16C8.01562 16 7.1436 14.7794 6.75659 13.8954C6.575 13.4806 6.4842 13.2732 6.50226 13.0108C6.52032 12.7484 6.63925 12.5565 6.8771 12.1727C8.22214 10.0024 10.5145 8.02113 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SchoolTieIcon;
