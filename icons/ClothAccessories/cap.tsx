import * as React from "react";
import type { SVGProps } from "react";

interface CapIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CapIcon = (props: CapIconProps) => {
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
        <path d="M2.5 17L2.05801 14.5262C1.4248 8.63648 6.05622 3.5 12 3.5C17.9438 3.5 22.5752 8.63648 21.942 14.5262L21.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.0157 10.5C7.81291 7.29507 9.59813 3.5 12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9999 10.5C16.2027 7.29507 14.4175 3.5 12.0156 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 17.0094C10.5 14.1428 13.5 14.5244 21.5 17.0094C21.2236 18.1308 21.0732 21.2996 19.851 21.8967C19.265 22.183 18.4247 21.7989 17.821 21.6547C14.9252 20.963 13.4773 20.6171 12 20.6171C10.5227 20.6171 9.07482 20.963 6.17904 21.6547C5.57535 21.7989 4.73502 22.183 4.14904 21.8967C2.92684 21.2996 2.77642 18.1308 2.5 17.0094Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CapIcon;
