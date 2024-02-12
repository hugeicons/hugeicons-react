import * as React from "react";
import type { SVGProps } from "react";

interface Svg01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Svg01Icon = (props: Svg01IconProps) => {
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
        <path d="M14.009 16L12.3364 20.6948C12.0264 21.5649 11.8714 22 11.6259 22C11.3805 22 11.2254 21.5649 10.9154 20.6948L9.24283 16M20.5 17C20.4097 15.9819 19.5865 16 18.7189 16C17.8686 16 17.4434 16 17.1792 16.2929C16.915 16.5858 16.915 17.0572 16.915 18V20C16.915 20.9428 16.915 21.4142 17.1792 21.7071C17.4434 22 17.8686 22 18.7189 22C19.5693 22 19.9945 22 20.2587 21.7071C20.5229 21.4142 20.5229 20.9428 20.5229 20C20.5229 19.2964 19.1699 19.5 19.1699 19.5M6.0413 16H4.92986C4.48571 16 4.26363 16 4.08846 16.0761C3.49189 16.3353 3.50001 16.9447 3.50001 17.5C3.50001 18.0553 3.49189 18.6647 4.08846 18.9239C4.26363 19 4.48571 19 4.92986 19C5.37402 19 5.5961 19 5.77127 19.0761C6.36784 19.3353 6.35972 19.9447 6.35972 20.5C6.35972 21.0553 6.36784 21.6647 5.77127 21.9239C5.5961 22 5.37402 22 4.92987 22H3.71933" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Svg01Icon;
