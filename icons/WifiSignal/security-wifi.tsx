import * as React from "react";
import type { SVGProps } from "react";

interface SecurityWifiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecurityWifiIcon = (props: SecurityWifiIconProps) => {
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
        <path d="M3 9.68065V8.90856C3 7.41174 3 6.66334 3.28359 6.03142C3.4585 5.64167 3.70911 5.28869 4.02157 4.99198C4.52818 4.51091 5.2461 4.24813 6.68195 3.72256L9.62992 2.64351C10.802 2.2145 11.388 2 12 2C12.612 2 13.198 2.2145 14.3701 2.64351L17.3181 3.72256C18.7539 4.24813 19.4718 4.51091 19.9784 4.99198C20.2909 5.28869 20.5415 5.64167 20.7164 6.03142C21 6.66334 21 7.41174 21 8.90856V9.68065C21 12.0844 21 13.2863 20.7032 14.3862C20.3367 15.7445 19.6418 16.9973 18.6769 18.0394C17.8955 18.8832 16.8645 19.5402 14.8023 20.8542C13.8792 21.4424 13.4176 21.7365 12.9269 21.8733C12.3211 22.0422 11.6789 22.0422 11.0731 21.8733C10.5824 21.7365 10.1208 21.4424 9.19766 20.8542C7.13553 19.5402 6.10447 18.8832 5.32311 18.0394C4.35815 16.9973 3.66328 15.7445 3.29677 14.3862C3 13.2863 3 12.0844 3 9.68065Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9.47776C9.14883 8.54314 10.5209 8 11.9946 8C13.4729 8 14.849 8.54657 16 9.48661M14.1743 12C13.5182 11.5909 12.7779 11.3607 11.9946 11.3607C11.2152 11.3607 10.4784 11.5886 9.82477 11.9938" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15H12.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SecurityWifiIcon;
