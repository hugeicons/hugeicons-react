import * as React from "react";
import type { SVGProps } from "react";

interface UserSearch02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserSearch02Icon = (props: UserSearch02IconProps) => {
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
        <path d="M5.18007 15.2964C3.9225 16.0335 0.625212 17.5386 2.63348 19.422C3.6145 20.342 4.70711 21 6.08078 21H13.9193C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.82 15.2964C11.871 13.5679 8.12906 13.5679 5.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7C14 9.20914 12.2092 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2092 3 14 4.79086 14 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.801 7.8L22.001 9M21.401 5.7C21.401 4.20882 20.1922 3 18.701 3C17.2098 3 16.001 4.20882 16.001 5.7C16.001 7.19118 17.2098 8.4 18.701 8.4C20.1922 8.4 21.401 7.19118 21.401 5.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserSearch02Icon;
