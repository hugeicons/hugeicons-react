import * as React from "react";
import type { SVGProps } from "react";

interface UserShield01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserShield01Icon = (props: UserShield01IconProps) => {
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
        <path d="M12 14.0466C9.7927 13.8404 7.53058 14.3187 5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.9992 14C16.7328 14 15.9117 14.8076 14.9405 15.102C14.5456 15.2217 14.3482 15.2815 14.2683 15.3659C14.1884 15.4502 14.165 15.5735 14.1182 15.8201C13.6174 18.4584 14.712 20.8976 17.3222 21.847C17.6027 21.949 17.7429 22 18.0006 22C18.2583 22 18.3986 21.949 18.679 21.847C21.2891 20.8976 22.3826 18.4584 21.8817 15.8201C21.8349 15.5735 21.8114 15.4502 21.7315 15.3658C21.6516 15.2814 21.4542 15.2216 21.0593 15.102C20.0878 14.8077 19.2657 14 17.9992 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserShield01Icon;
