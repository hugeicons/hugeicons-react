import * as React from "react";
import type { SVGProps } from "react";

interface UserArrowLeftRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserArrowLeftRightIcon = (props: UserArrowLeftRightIconProps) => {
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
        <path d="M7.18007 15.2964C5.92249 16.0335 2.62521 17.5386 4.63348 19.422C5.6145 20.342 6.7071 21 8.08077 21H15.9192C17.2929 21 18.3855 20.342 19.3665 19.422C21.3748 17.5386 18.0775 16.0335 16.8199 15.2964C13.8709 13.5679 10.1291 13.5679 7.18007 15.2964Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.6555 8.5L22.4031 7.79549C22.801 7.4205 23 7.233 23 7C23 6.76701 22.801 6.5795 22.4031 6.2045L21.6555 5.5M22.9794 7L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.34452 8.5L1.59691 7.79549C1.19897 7.4205 1 7.233 1 7C1 6.76701 1.19897 6.5795 1.59691 6.2045L2.34452 5.5M1.02059 7L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserArrowLeftRightIcon;
