import * as React from "react";
import type { SVGProps } from "react";

interface UserLock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserLock01Icon = (props: UserLock01IconProps) => {
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
        <path d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453366 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.7596 16.378C15.6796 16.378 15.2171 17.1576 15.0971 17.6373C14.9771 18.117 14.9771 19.856 15.0491 20.5755C15.2891 21.475 15.8891 21.8468 16.4771 21.9667C17.0171 22.0147 19.2971 21.9967 19.9571 21.9967C20.9171 22.0147 21.6371 21.6549 21.9371 20.5755C21.9971 20.2157 22.0571 18.2369 21.9071 17.6373C21.5891 16.6778 20.866 16.378 20.266 16.378M16.7596 16.378H20.266M16.7596 16.378C16.7596 16.378 16.7582 15.5516 16.7596 15.1173C16.7609 14.7204 16.726 14.3378 16.9156 13.9876C17.626 12.5748 19.666 12.7187 20.17 14.1579C20.2573 14.3948 20.2626 14.7704 20.26 15.1173C20.2567 15.5605 20.266 16.378 20.266 16.378" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default UserLock01Icon;
