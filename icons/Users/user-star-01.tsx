import * as React from "react";
import type { SVGProps } from "react";

interface UserStar01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserStar01Icon = (props: UserStar01IconProps) => {
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
        <path d="M12.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.827 14.1422 10.4865 13.7109 13 14.1878" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.6911 14.5777L19.395 15.9972C19.491 16.1947 19.7469 16.3843 19.9629 16.4206L21.2388 16.6343C22.0547 16.7714 22.2467 17.3682 21.6587 17.957L20.6668 18.9571C20.4989 19.1265 20.4069 19.4531 20.4589 19.687L20.7428 20.925C20.9668 21.9049 20.4509 22.284 19.591 21.7718L18.3951 21.0581C18.1791 20.929 17.8232 20.929 17.6032 21.0581L16.4073 21.7718C15.5514 22.284 15.0315 21.9009 15.2554 20.925L15.5394 19.687C15.5914 19.4531 15.4994 19.1265 15.3314 18.9571L14.3395 17.957C13.7556 17.3682 13.9436 16.7714 14.7595 16.6343L16.0353 16.4206C16.2473 16.3843 16.5033 16.1947 16.5993 15.9972L17.3032 14.5777C17.6872 13.8074 18.3111 13.8074 18.6911 14.5777Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserStar01Icon;
