import * as React from "react";
import type { SVGProps } from "react";

interface RootThirdBracketIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RootThirdBracketIcon = (props: RootThirdBracketIconProps) => {
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
        <path d="M18 8H12.5167C11.7 8 11.46 8.04 11.299 8.86405L9.95406 14.4693C9.62198 15.7974 9.45066 15.9934 9.12 16.02C8.76 15.9 8.58977 15.5923 7.98 14.34L7.63508 13.58C7.37243 13.0406 7.28553 12.813 7.02 12.74C6.62037 12.63 6.30716 12.9408 6 13.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.1035 11.4321C13.5235 11.4182 13.9795 11.4001 14.2291 11.8161C14.5724 12.5085 15.1156 13.9273 15.3175 14.3774C15.4185 14.5505 15.4795 14.7001 15.8395 14.8201C16.1088 14.8547 16.4995 14.8641 16.4995 14.8641" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.7407 11.4199C15.8945 11.4199 15.3905 12.3659 14.9167 12.9587C14.3074 13.8654 13.6807 14.8799 12.8887 14.8519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 21C19.2322 21 20.231 19.8487 20.231 18.4286C20.231 16.1808 20.1312 14.6865 21.6733 12.9091C22.1089 12.407 22.1089 11.593 21.6733 11.0909C20.1312 9.31354 20.231 7.81916 20.231 5.57143C20.231 4.15127 19.2322 3 18 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21C4.76784 21 3.76897 19.8487 3.76897 18.4286C3.76897 16.1808 3.86877 14.6865 2.32673 12.9091C1.89109 12.407 1.89109 11.593 2.32673 11.0909C3.83496 9.35251 3.76897 7.83992 3.76897 5.57143C3.76897 4.15127 4.76784 3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RootThirdBracketIcon;
