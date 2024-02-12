import * as React from "react";
import type { SVGProps } from "react";

interface Behance01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Behance01Icon = (props: Behance01IconProps) => {
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
        <path d="M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 7H16M14 14H22C22 11.9587 20.2091 10 18 10C15.7909 10 14 11.9587 14 14ZM14 14V15C14 17.2091 15.7909 19 18 19C19.4806 19 20.7733 18.1956 21.4649 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Behance01Icon;
