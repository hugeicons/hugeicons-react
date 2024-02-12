import * as React from "react";
import type { SVGProps } from "react";

interface Apple01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Apple01Icon = (props: Apple01IconProps) => {
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
        <path d="M8 5C5.23858 5 3 8.0139 3 11.0278C3 14.544 3.5 17.0556 5.5 20.0695C7.02044 22.1062 9.05026 22.6168 11.2139 21.1903C11.6757 20.8859 12.3243 20.8859 12.7861 21.1903C14.9497 22.6168 16.9796 22.1062 18.5 20.0695C20.5 17.0556 21 14.544 21 11.0278C21 8.0139 18.7614 5 16 5C14.5746 5 13.2885 5.7849 12.3777 6.63254C12.166 6.82949 11.834 6.82949 11.6223 6.63254C10.7115 5.7849 9.42542 5 8 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 12C6 10.3665 6.82273 8.73298 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Apple01Icon;
