import * as React from "react";
import type { SVGProps } from "react";

interface PropertyViewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PropertyViewIcon = (props: PropertyViewIconProps) => {
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
        <path d="M20.9977 12.5032C20.9977 12.5032 21 12.0338 21 11.5029C21 7.02321 21 4.78334 19.6088 3.39167C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39167C2 4.78334 2 7.02321 2 11.5029C2 15.9827 2 18.2225 3.39124 19.6142C4.55785 20.7812 6.32067 20.9696 9.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 16H7M10 12H15M6 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 18.5H17.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.772 18.0225C21.924 18.2357 22 18.3422 22 18.5C22 18.6578 21.924 18.7643 21.772 18.9775C21.089 19.9353 19.3446 22 17 22C14.6554 22 12.911 19.9353 12.228 18.9775C12.076 18.7643 12 18.6578 12 18.5C12 18.3422 12.076 18.2357 12.228 18.0225C12.911 17.0647 14.6554 15 17 15C19.3446 15 21.089 17.0647 21.772 18.0225Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default PropertyViewIcon;
