import * as React from "react";
import type { SVGProps } from "react";

interface Mp401IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mp401Icon = (props: Mp401IconProps) => {
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
        <path d="M11.0588 22V19M11.0588 19V17.2C11.0588 16.6343 11.0588 16.3515 11.2242 16.1757C11.3896 16 11.6558 16 12.1882 16H12.9412C13.7209 16 14.3529 16.6716 14.3529 17.5C14.3529 18.3284 13.7209 19 12.9412 19H11.0588ZM3.5 22L3.8905 16.7201C3.92363 16.2722 3.94019 16.0483 4.06232 16.0065C4.18444 15.9647 4.30951 16.1401 4.55966 16.4911L5.55713 17.8904C5.6928 18.0808 5.76063 18.176 5.8511 18.176C5.94157 18.176 6.00941 18.0808 6.14508 17.8904L7.14311 16.4903C7.39304 16.1396 7.51801 15.9643 7.64011 16.0061C7.76221 16.0478 7.77888 16.2715 7.81224 16.719L8.20588 22M20.5 16V19M20.5 19V22M20.5 19H19.0882C18.2009 19 17.7572 19 17.4815 18.7071C17.2059 18.4142 17.2059 17.9428 17.2059 17V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Mp401Icon;
