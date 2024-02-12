import * as React from "react";
import type { SVGProps } from "react";

interface UserShield02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserShield02Icon = (props: UserShield02IconProps) => {
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
        <path d="M18.9994 3C18.0496 3 17.4337 3.6057 16.7054 3.82647C16.4092 3.91624 16.2611 3.96112 16.2012 4.02439C16.1413 4.08767 16.1237 4.18012 16.0886 4.36504C15.7131 6.3438 16.534 8.17319 18.4917 8.88524C18.702 8.96175 18.8072 9 19.0005 9C19.1937 9 19.2989 8.96174 19.5092 8.88524C21.4668 8.17318 22.2869 6.34379 21.9113 4.36504C21.8761 4.18009 21.8586 4.08762 21.7986 4.02435C21.7387 3.96107 21.5906 3.91621 21.2945 3.8265C20.5659 3.60574 19.9493 3 18.9994 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default UserShield02Icon;
