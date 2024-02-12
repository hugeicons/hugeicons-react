import * as React from "react";
import type { SVGProps } from "react";

interface PolicyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PolicyIcon = (props: PolicyIconProps) => {
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
        <path d="M11.4706 22C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10M11.5 22H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 18.5896L16.5978 21.7428C16.5572 21.9011 16.7139 22.0385 16.8659 21.9778L18.8514 21.1849C18.9468 21.1468 19.0532 21.1468 19.1486 21.1849L21.1531 21.9854C21.3014 22.0446 21.456 21.9149 21.4231 21.7589L20.6589 18.4911M22 15.9951C22 14.341 20.6569 13 19 13C17.3431 13 16 14.341 16 15.9951C16 17.6493 17.3431 18.9902 19 18.9902C20.6569 18.9902 22 17.6493 22 15.9951Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PolicyIcon;
