import * as React from "react";
import type { SVGProps } from "react";

interface UserLove01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserLove01Icon = (props: UserLove01IconProps) => {
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
        <path d="M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.53058 14.3187 9.7927 13.8404 12 14.0466" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.015 15.3866C16.0876 14.7469 17.0238 15.0047 17.5863 15.4153C17.8169 15.5837 17.9322 15.6679 18 15.6679C18.0678 15.6679 18.1831 15.5837 18.4137 15.4153C18.9762 15.0047 19.9124 14.7469 20.985 15.3866C22.3928 16.2261 22.7113 18.9958 19.4642 21.3324C18.8457 21.7775 18.5365 22 18 22C17.4635 22 17.1543 21.7775 16.5358 21.3324C13.2887 18.9958 13.6072 16.2261 15.015 15.3866Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default UserLove01Icon;
