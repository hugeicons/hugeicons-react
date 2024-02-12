import * as React from "react";
import type { SVGProps } from "react";

interface OptionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OptionIcon = (props: OptionIconProps) => {
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
        <path d="M4 5H5.04362C6.96246 5 7.92187 5 8.67328 5.49548C9.42469 5.99095 9.80263 6.8728 10.5585 8.63648L13.4415 15.3635C14.1974 17.1272 14.5753 18.009 15.3267 18.5045C16.0781 19 17.0375 19 18.9564 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default OptionIcon;
