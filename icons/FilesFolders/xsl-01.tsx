import * as React from "react";
import type { SVGProps } from "react";

interface Xsl01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Xsl01Icon = (props: Xsl01IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5413 16H12.4299C11.9857 16 11.7636 16 11.5885 16.0761C10.9919 16.3353 11 16.9447 11 17.5C11 18.0553 10.9919 18.6647 11.5885 18.9239C11.7636 19 11.9857 19 12.4299 19C12.874 19 13.0961 19 13.2713 19.0761C13.8678 19.3353 13.8597 19.9447 13.8597 20.5C13.8597 21.0553 13.8678 21.6647 13.2713 21.9239C13.0961 22 12.874 22 12.4299 22H11.2193M3.5 16L5.5 19M5.5 19L7.5 22M5.5 19L7.5 16M5.5 19L3.5 22M20.5 22H19.5C18.5572 22 18.0858 22 17.7929 21.7071C17.5 21.4142 17.5 20.9428 17.5 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Xsl01Icon;
