import * as React from "react";
import type { SVGProps } from "react";

interface CursorMove02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorMove02Icon = (props: CursorMove02IconProps) => {
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
        <path d="M2.38086 2.46562C4.21503 0.490413 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 17.4985L19 17.4985M22 17.4985C22 17.2427 21.172 16.3301 20.8664 16M22 17.4985C22 17.7557 21.172 18.6986 20.8664 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 17.5015L16 17.5015M13 17.5015C13 17.7573 13.828 18.6699 14.1336 19M13 17.5015C13 17.2443 13.828 16.3014 14.1336 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4985 13L17.4985 16M17.4985 13C17.2427 13 16.3301 13.828 16 14.1336M17.4985 13C17.7557 13 18.6986 13.828 19 14.1336" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5015 22V19M17.5015 22C17.7573 22 18.6699 21.172 19 20.8664M17.5015 22C17.2443 22 16.3014 21.172 16 20.8664" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorMove02Icon;
