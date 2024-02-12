import * as React from "react";
import type { SVGProps } from "react";

interface CameraNightMode02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CameraNightMode02Icon = (props: CameraNightMode02IconProps) => {
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
        <path d="M17 6C19.3456 6 20.0184 6 20.8263 6.61994C21.0343 6.77954 21.2205 6.96572 21.3801 7.17372C22 7.98164 22 9.15442 22 11.5V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V11.5C2 9.15442 2 7.98164 2.61994 7.17372C2.77954 6.96572 2.96572 6.77954 3.17372 6.61994C3.98164 6 4.65442 6 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9998 6.5H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1195 18C10.1205 18 8.5 16.4197 8.5 14.4702C8.5 12.7426 9.77269 11.3048 11.4536 11C11.2992 11.3925 11.2146 11.8186 11.2146 12.2641C11.2146 14.2135 12.8351 15.7939 14.8341 15.7939C15.0616 15.7939 15.2842 15.7734 15.5 15.7343C14.9787 17.0594 13.6617 18 12.1195 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CameraNightMode02Icon;
