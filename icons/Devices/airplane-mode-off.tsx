import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneModeOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneModeOffIcon = (props: AirplaneModeOffIconProps) => {
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
        <path d="M13.1795 13.8261L12.9201 16.1149C12.8261 16.9448 12.779 17.3598 12.915 17.7398C13.2335 18.63 14.3149 19.3591 14.9753 20.0066C15.3403 20.3644 15.7386 21.3934 15.3224 21.8613C15.0655 22.1503 14.6481 21.9157 14.3609 21.803L11.5952 20.7184C11.2645 20.5887 11.0991 20.5239 10.9255 20.5239C10.7519 20.5239 10.5865 20.5887 10.2558 20.7184L7.49016 21.803C7.20291 21.9157 6.78553 22.1503 6.52858 21.8613C6.11239 21.3934 6.51073 20.3644 6.87572 20.0066C7.53614 19.3591 8.61751 18.63 8.936 17.7398C9.07199 17.3598 9.02496 16.9448 8.93091 16.1149L8.67153 13.8261L2.89514 15.1587C2.29655 15.2968 1.99982 15.1155 2 14.4391C2.00033 13.1971 2.39739 12.537 3.40543 11.9183L6.6995 9.89656C7.25228 9.55783 7.52868 9.38846 7.71947 9.15616C7.99925 8.81552 8 8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 4C8.97199 3.18656 9.71851 2.43508 10.4363 2.11845C10.7943 1.96052 11.205 1.96052 11.5631 2.11845C12.7263 2.63158 13.8803 4.28671 14.0089 5.49686C14.133 6.66595 13.3998 8.15082 14.2324 9.15616C14.4248 9.38846 14.7035 9.55783 15.2609 9.89656L18.5826 11.9182C19.5993 12.5369 19.9997 13.1973 19.9997 14.4395C19.9997 14.9429 19.5 15.5 19.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AirplaneModeOffIcon;
