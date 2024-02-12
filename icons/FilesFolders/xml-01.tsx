import * as React from "react";
import type { SVGProps } from "react";

interface Xml01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Xml01Icon = (props: Xml01IconProps) => {
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
        <path d="M3.5 16L5.38235 19M5.38235 19L7.26471 22M5.38235 19L7.26471 16M5.38235 19L3.5 22M20.5 22H19.5588C18.6715 22 18.2278 22 17.9521 21.7071C17.6765 21.4142 17.6765 20.9428 17.6765 20V16M10.1176 21.9999L10.5081 17.0015C10.5413 16.5775 10.5578 16.3655 10.68 16.3259C10.8021 16.2864 10.9272 16.4525 11.1773 16.7847L12.1748 18.1095C12.3104 18.2897 12.3783 18.3798 12.4688 18.3798C12.5592 18.3798 12.6271 18.2897 12.7627 18.1095L13.7608 16.784C14.0107 16.452 14.1357 16.286 14.2578 16.3256C14.3799 16.3651 14.3965 16.5769 14.4299 17.0005L14.8235 21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Xml01Icon;
