import * as React from "react";
import type { SVGProps } from "react";

interface MailEdit02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailEdit02Icon = (props: MailEdit02IconProps) => {
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
        <path d="M7.00232 7.75L9.94434 9.48943C11.6595 10.5035 12.3451 10.5035 14.0603 9.48943L17.0023 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9976 10.75V9.77844C21.9322 6.71114 21.8995 5.17749 20.7678 4.04141C19.636 2.90532 18.0609 2.86574 14.9106 2.78659C12.9691 2.73781 11.0466 2.7378 9.10508 2.78658C5.95484 2.86573 4.37972 2.9053 3.24796 4.04139C2.11621 5.17748 2.0835 6.71113 2.01809 9.77843C1.99706 10.7647 1.99706 11.7451 2.01809 12.7314C2.08351 15.7987 2.11621 17.3323 3.24797 18.4684C4.37972 19.6045 5.95484 19.6441 9.10509 19.7232C9.57334 19.735 10.5357 19.7439 11.0023 19.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8546 13.6893L21.5469 14.3817C22.1327 14.9675 22.1327 15.9172 21.5469 16.503L17.9195 20.1987C17.6342 20.484 17.2692 20.6764 16.8725 20.7505L14.6243 21.2385C14.2694 21.3156 13.9533 21.0004 14.0293 20.6452L14.5079 18.4099C14.582 18.0132 14.7743 17.6482 15.0597 17.3629L18.7332 13.6893C19.319 13.1036 20.2688 13.1036 20.8546 13.6893Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailEdit02Icon;
