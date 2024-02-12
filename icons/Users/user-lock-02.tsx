import * as React from "react";
import type { SVGProps } from "react";

interface UserLock02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserLock02Icon = (props: UserLock02IconProps) => {
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
        <path d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.9062 4.61331V3.51847C20.9062 2.67984 20.2767 2 19.5 2C18.7233 2 18.0937 2.67984 18.0937 3.51847V4.61331M19.0312 9H19.9688C20.6983 9 21.0631 9 21.3392 8.84062C21.5573 8.71478 21.7359 8.52195 21.8524 8.28652C22 7.98834 22 7.59445 22 6.80665C22 6.01886 22 5.62496 21.8524 5.32679C21.7359 5.09136 21.5573 4.89853 21.3392 4.77269C21.0631 4.61331 20.6983 4.61331 19.9688 4.61331H19.0312C18.3017 4.61331 17.9369 4.61331 17.6608 4.77269C17.4427 4.89853 17.2641 5.09136 17.1476 5.32679C17 5.62496 17 6.01886 17 6.80665C17 7.59445 17 7.98834 17.1476 8.28652C17.2641 8.52195 17.4427 8.71478 17.6608 8.84062C17.9369 9 18.3017 9 19.0312 9Z" stroke="currentColor" strokeWidth="1.28571" />
      </svg>
    </>
  );
};

export default UserLock02Icon;
