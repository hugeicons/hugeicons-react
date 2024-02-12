import * as React from "react";
import type { SVGProps } from "react";

interface ScreenLockRotationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ScreenLockRotationIcon = (props: ScreenLockRotationIconProps) => {
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
        <path d="M12.0339 3.74708C11.735 3.60165 11.4456 3.52378 11.1423 3.51261C10.0481 3.47231 9.20025 4.31547 7.5045 6.00179C5.80874 7.6881 4.96086 8.53126 5.00139 9.6193C5.04191 10.7073 5.95501 11.6153 7.78121 13.4313L11.1017 16.7335C12.9279 18.5495 13.841 19.4575 14.9352 19.4978C16.0293 19.538 16.8772 18.695 18.5729 17.0087C19.9404 15.6488 20.7565 14.8372 21 14.0033" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12.5044C3.11821 15.3763 4.97784 20.9958 11.3699 21.4776C11.7462 21.506 11.9344 21.5202 11.9883 21.4063C12.0423 21.2923 11.9063 21.1601 11.6344 20.8958L10.4137 19.7095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.7365 5.67852L15.7365 4.28754C15.7365 4.08209 15.7451 3.87407 15.8187 3.68221C16.0148 3.1715 16.5341 2.50244 17.4796 2.50244C18.4251 2.50244 18.9649 3.1715 19.1609 3.68221C19.2346 3.87407 19.2432 4.08209 19.2432 4.28754L19.2431 5.67852M15.806 11.504H19.194C20.1914 11.504 21 10.697 21 9.70163V7.69939C21 6.70397 20.1914 5.89703 19.194 5.89703H15.806C14.8086 5.89703 14 6.70397 14 7.69939V9.70163C14 10.697 14.8086 11.504 15.806 11.504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ScreenLockRotationIcon;
