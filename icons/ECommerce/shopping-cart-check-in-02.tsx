import * as React from "react";
import type { SVGProps } from "react";

interface ShoppingCartCheckIn02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShoppingCartCheckIn02Icon = (props: ShoppingCartCheckIn02IconProps) => {
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
        <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6H8.5M22 6H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8.5C11.4915 9.0057 12.7998 11 13.5 11M16 8.5C15.5085 9.0057 14.2002 11 13.5 11M13.5 11V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ShoppingCartCheckIn02Icon;
