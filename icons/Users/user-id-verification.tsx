import * as React from "react";
import type { SVGProps } from "react";

interface UserIdVerificationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserIdVerificationIcon = (props: UserIdVerificationIconProps) => {
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
        <path d="M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0846 4.80297 21.3959 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8M9.13432 21.5C6.46805 21.4392 4.9107 21.1854 3.84664 20.1251C2.91537 19.197 2.60406 17.8924 2.5 15.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default UserIdVerificationIcon;
