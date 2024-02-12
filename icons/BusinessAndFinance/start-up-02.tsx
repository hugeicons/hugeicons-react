import * as React from "react";
import type { SVGProps } from "react";

interface StartUp02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StartUp02Icon = (props: StartUp02IconProps) => {
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
        <path d="M6.6001 11.923C11.6727 2.46869 17.9891 2.35967 20.5132 3.48695C21.6405 6.01105 21.5314 12.3274 12.0772 17.4C11.9791 16.8364 11.4339 15.3599 10.037 13.9631C8.64022 12.5663 7.16374 12.021 6.6001 11.923Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.3501 16.95C15.1886 17.85 15.3849 19.4638 15.6396 21C15.6396 21 19.4902 18.1535 17.0271 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.04996 10.7269C6.14996 8.88844 4.53615 8.69215 3 8.43746C3 8.43746 5.8465 4.58682 9.74997 7.04993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.01808 14.9115C5.50625 15.4233 4.63613 16.9076 5.25033 18.7503C7.09293 19.3645 8.57725 18.4943 9.08909 17.9825" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.3008 8.4502C17.3008 7.4837 16.5173 6.7002 15.5508 6.7002C14.5843 6.7002 13.8008 7.4837 13.8008 8.4502C13.8008 9.41669 14.5843 10.2002 15.5508 10.2002C16.5173 10.2002 17.3008 9.41669 17.3008 8.4502Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default StartUp02Icon;
