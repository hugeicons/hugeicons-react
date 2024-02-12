import * as React from "react";
import type { SVGProps } from "react";

interface UserUnlock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserUnlock01Icon = (props: UserUnlock01IconProps) => {
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
        <path d="M16.5312 16.36V14.9523C16.5312 13.8741 17.4127 13 18.5 13C18.9887 13 19.4359 13.1766 19.7801 13.469M17.8437 22H19.1563C20.1777 22 20.6884 22 21.0749 21.7951C21.3802 21.6333 21.6302 21.3854 21.7934 21.0827C22 20.6993 22 20.1929 22 19.18C22 18.1671 22 17.6607 21.7934 17.2773C21.6302 16.9746 21.3802 16.7267 21.0749 16.5649C20.6884 16.36 20.1777 16.36 19.1563 16.36H17.8437C16.8223 16.36 16.3116 16.36 15.9251 16.5649C15.6198 16.7267 15.3698 16.9746 15.2066 17.2773C15 17.6607 15 18.1671 15 19.18C15 20.1929 15 20.6993 15.2066 21.0827C15.3698 21.3854 15.6198 21.6333 15.9251 21.7951C16.3116 22 16.8223 22 17.8437 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default UserUnlock01Icon;
