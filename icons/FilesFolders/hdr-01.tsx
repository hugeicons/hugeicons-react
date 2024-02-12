import * as React from "react";
import type { SVGProps } from "react";

interface Hdr01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hdr01Icon = (props: Hdr01IconProps) => {
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
        <path d="M3.5 22V19M3.5 19V16M3.5 19H6.79576M6.79576 16V19M6.79576 19V22M16.5449 22V19.6M16.5449 19.6V17.2C16.5449 16.321 16.6209 16 17.5337 16H19.0168C19.836 16 20.5 16.8059 20.5 17.8C20.5 18.7941 19.836 19.6 19.0168 19.6M16.5449 19.6H19.0168M19.0168 19.6L20.0416 22M13.6997 19C13.6997 20.6569 12.4352 22 10.8754 22C10.5235 22 10.3475 22 10.2164 21.9196C9.90259 21.7272 9.93398 21.3376 9.93398 21V17C9.93398 16.6624 9.90259 16.2728 10.2164 16.0804C10.3475 16 10.5235 16 10.8754 16C12.4352 16 13.6997 17.3431 13.6997 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Hdr01Icon;
