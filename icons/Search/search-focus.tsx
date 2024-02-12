import * as React from "react";
import type { SVGProps } from "react";

interface SearchFocusIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SearchFocusIcon = (props: SearchFocusIconProps) => {
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
        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.4924 7.5C8.77591 7.54342 8.31993 7.66286 7.99139 7.99139C7.66286 8.31993 7.54342 8.77591 7.5 9.4924M12.5076 7.5C13.2241 7.54342 13.6801 7.66286 14.0086 7.99139C14.3371 8.31993 14.4566 8.77591 14.5 9.4924M14.4923 12.6214C14.4431 13.273 14.3194 13.6978 14.0086 14.0086C13.6801 14.3371 13.2241 14.4566 12.5076 14.5M9.4924 14.5C8.7759 14.4566 8.31993 14.3371 7.99139 14.0086C7.6806 13.6978 7.55693 13.273 7.50772 12.6214" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SearchFocusIcon;
