import * as React from "react";
import type { SVGProps } from "react";

interface FavouriteSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FavouriteSquareIcon = (props: FavouriteSquareIconProps) => {
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
        <path d="M7.76872 7.99708C9.10954 7.17461 10.2798 7.50606 10.9828 8.03401C11.2711 8.25048 11.4152 8.35871 11.5 8.35871C11.5848 8.35871 11.7289 8.25048 12.0172 8.03401C12.7202 7.50606 13.8905 7.17461 15.2313 7.99708C16.991 9.07647 17.3891 12.6374 13.3302 15.6417C12.5571 16.2139 12.1706 16.5 11.5 16.5C10.8294 16.5 10.4429 16.2139 9.66976 15.6417C5.61086 12.6374 6.00903 9.07647 7.76872 7.99708Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FavouriteSquareIcon;
