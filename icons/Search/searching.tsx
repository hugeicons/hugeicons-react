import * as React from "react";
import type { SVGProps } from "react";

interface SearchingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SearchingIcon = (props: SearchingIconProps) => {
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
        <path d="M4 10C3.51076 9.96288 3.16925 9.87932 2.88886 9.69117C2.67048 9.54463 2.48298 9.35634 2.33706 9.13703C2 8.63045 2 7.92524 2 6.51483C2 5.10442 2 4.39921 2.33706 3.89263C2.48298 3.67332 2.67048 3.48502 2.88886 3.33849C3.39331 3 4.09554 3 5.5 3H18.5C19.9045 3 20.6067 3 21.1111 3.33849C21.3295 3.48502 21.517 3.67332 21.6629 3.89263C22 4.39921 22 5.10442 22 6.51483C22 7.80256 22 8.50243 21.7435 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.2 18.2L21 21M19.6 13.3C19.6 9.82057 16.7794 7 13.3 7C9.82057 7 7 9.82057 7 13.3C7 16.7794 9.82057 19.6 13.3 19.6C16.7794 19.6 19.6 16.7794 19.6 13.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SearchingIcon;
