import * as React from "react";
import type { SVGProps } from "react";

interface UserQuestion02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserQuestion02Icon = (props: UserQuestion02IconProps) => {
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
        <path d="M6.18007 15.2964C4.92249 16.0335 1.62521 17.5386 3.63348 19.422C4.6145 20.342 5.7071 21 7.08077 21H14.9192C16.2929 21 17.3855 20.342 18.3665 19.422C20.3748 17.5386 17.0775 16.0335 15.8199 15.2964C12.8709 13.5679 9.12906 13.5679 6.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 5.53846C18 4.68879 18.6716 4 19.5 4C20.3284 4 21 4.68879 21 5.53846C21 5.84473 20.9127 6.1301 20.7623 6.36984C20.3141 7.08436 19.5 7.76572 19.5 8.61538V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.4998 11H19.5088" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserQuestion02Icon;
