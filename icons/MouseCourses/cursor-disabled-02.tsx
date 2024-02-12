import * as React from "react";
import type { SVGProps } from "react";

interface CursorDisabled02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorDisabled02Icon = (props: CursorDisabled02IconProps) => {
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
        <path d="M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14.318 20.682C16.0754 22.4393 18.9246 22.4393 20.682 20.682C22.4393 18.9246 22.4393 16.0754 20.682 14.318M14.318 20.682C12.5607 18.9246 12.5607 16.0754 14.318 14.318C16.0754 12.5607 18.9246 12.5607 20.682 14.318M14.318 20.682L20.682 14.318" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorDisabled02Icon;
