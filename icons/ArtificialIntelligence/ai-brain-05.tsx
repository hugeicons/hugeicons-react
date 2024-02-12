import * as React from "react";
import type { SVGProps } from "react";

interface AiBrain05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiBrain05Icon = (props: AiBrain05IconProps) => {
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
        <path d="M7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 8.06866 4.65822 8.60037 4.93304 9.0535C3.54727 9.31855 2.5 10.537 2.5 12C2.5 13.463 3.54727 14.6814 4.93304 14.9465M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6M7.5 4.5C7.5 5.31791 7.89278 6.04408 8.5 6.50018M4.93304 14.9465C4.65822 15.3996 4.5 15.9313 4.5 16.5C4.5 18.1569 5.84315 19.5 7.5 19.5C7.5 20.8807 8.61929 22 10 22C11.3807 22 12.5 20.8807 12.5 19.5V18M4.93304 14.9465C5.28948 14.3588 5.84207 13.9032 6.5 13.6707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 9H15.5C14.5572 9 14.0858 9 13.7929 9.29289C13.5 9.58579 13.5 10.0572 13.5 11V13C13.5 13.9428 13.5 14.4142 13.7929 14.7071C14.0858 15 14.5572 15 15.5 15H17.5C18.4428 15 18.9142 15 19.2071 14.7071C19.5 14.4142 19.5 13.9428 19.5 13V11C19.5 10.0572 19.5 9.58579 19.2071 9.29289C18.9142 9 18.4428 9 17.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15V17M18 15V17M15 7V9M18 7V9M13.5 10.5H11.5M13.5 13.5H11.5M21.5 10.5H19.5M21.5 13.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AiBrain05Icon;
