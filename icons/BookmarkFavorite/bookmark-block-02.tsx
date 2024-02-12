import * as React from "react";
import type { SVGProps } from "react";

interface BookmarkBlock02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BookmarkBlock02Icon = (props: BookmarkBlock02IconProps) => {
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
        <path d="M19 12.5001V17.9809C19 20.2868 19 21.4397 18.2272 21.8524C16.7305 22.6515 13.9232 19.9853 12.59 19.1825C11.8168 18.7169 11.4302 18.4841 11 18.4841C10.5698 18.4841 10.1832 18.7169 9.41 19.1825C8.0768 19.9853 5.26947 22.6515 3.77285 21.8524C3 21.4397 3 20.2868 3 17.9809V9.70761C3 6.07425 3 4.25756 4.17157 3.12882C5.23467 2.10459 6.8857 2.00976 10 2.00098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2 3.2L18.8 8.8M20 6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6C12 8.20914 13.7909 10 16 10C18.2091 10 20 8.20914 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BookmarkBlock02Icon;
