import * as React from "react";
import type { SVGProps } from "react";

interface FolderBlockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderBlockIcon = (props: FolderBlockIconProps) => {
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
        <path d="M20.9749 20.4749C21.6082 19.8415 22 18.9665 22 18C22 16.067 20.433 14.5 18.5 14.5C17.5335 14.5 16.6585 14.8918 16.0251 15.5251M20.9749 20.4749C20.3415 21.1082 19.4665 21.5 18.5 21.5C16.567 21.5 15 19.933 15 18C15 17.0335 15.3918 16.1585 16.0251 15.5251M20.9749 20.4749L16.0251 15.5251" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20.5H9.1355C7.38377 20.5 5.488 20.5595 4.06545 19.5373C3.14643 18.8769 2.60099 17.8731 2.22787 16.2185C2.04647 15.4141 2 14.5858 2 13.7612V6.93054C2 5.97932 2.02245 5.00132 2.40125 4.12878C2.84752 3.10084 3.56189 2.67429 5 2.5H8.13858C9.00374 2.5 9.84271 2.86175 10.3633 3.55275C11.0547 4.47058 11.4744 5.2745 12 6.5M22 12.5V10.3962C22 9.47237 21.9139 8.51071 21.404 7.74039C20.8018 6.83075 19.9849 6.5345 18.5 6.5L12 6.5M7 6.5L12 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderBlockIcon;
