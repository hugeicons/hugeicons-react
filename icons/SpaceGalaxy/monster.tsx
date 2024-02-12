import * as React from "react";
import type { SVGProps } from "react";

interface MonsterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MonsterIcon = (props: MonsterIconProps) => {
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
        <path d="M12 11.5H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 11.5C16.5 13.433 14.4853 15 12 15C9.51472 15 7.5 13.433 7.5 11.5C7.5 9.567 9.51472 8 12 8C14.4853 8 16.5 9.567 16.5 11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18C13.4846 18.3093 12.7787 18.5 12 18.5C11.2213 18.5 10.5154 18.3093 10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4C7.30558 4 3.5 7.80558 3.5 12.5C3.5 14.5752 4.24365 16.4767 5.47899 17.9525C6.06977 18.6583 6.5 19.5115 6.5 20.4319C6.5 21.2979 7.20207 22 8.06812 22H15.9319C16.7979 22 17.5 21.2979 17.5 20.4319C17.5 19.5115 17.9302 18.6583 18.521 17.9525C19.7564 16.4767 20.5 14.5752 20.5 12.5C20.5 7.80558 16.6944 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 5C16.1667 4.1 17 2.24 19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 5C7.83333 4.1 7 2.24 5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MonsterIcon;
