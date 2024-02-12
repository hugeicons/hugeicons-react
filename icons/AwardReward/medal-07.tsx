import * as React from "react";
import type { SVGProps } from "react";

interface Medal07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Medal07Icon = (props: Medal07IconProps) => {
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
        <path d="M6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.5 16C9.5 14.6193 10.6193 13.5 12 13.5C13.3807 13.5 14.5 14.6193 14.5 16C14.5 17.3807 13.3807 18.5 12 18.5C10.6193 18.5 9.5 17.3807 9.5 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.6667 12L17.6032 11.1973C18.2904 10.6082 18.6341 10.3137 18.817 9.91584C19 9.51802 19 9.06543 19 8.16026V6C19 4.11438 19 3.17157 18.4142 2.58579C17.8284 2 16.8856 2 15 2H9C7.11438 2 6.17157 2 5.58579 2.58579C5 3.17157 5 4.11438 5 6V8.16026C5 9.06543 5 9.51802 5.18297 9.91584C5.36595 10.3137 5.70958 10.6082 6.39683 11.1973L7.33333 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Medal07Icon;
