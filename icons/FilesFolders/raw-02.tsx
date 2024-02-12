import * as React from "react";
import type { SVGProps } from "react";

interface Raw02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Raw02Icon = (props: Raw02IconProps) => {
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
        <path d="M15.0455 18L14.5368 16.3333M11.485 18L12.9174 13.3066C12.9718 13.1283 13.0648 13 13.2652 13C13.4657 13 13.5587 13.1283 13.6131 13.3066L14.5368 16.3333M7 18V16M7 16V14C7 13.2675 7.05472 13 7.71209 13H8.78021C9.37013 13 9.84834 13.6716 9.84834 14.5C9.84834 15.3284 9.37013 16 8.78021 16M7 16H8.78021M8.78021 16L9.4923 18M11.9993 16.3333H14.5368M21 13L20.637 17.1657C20.6062 17.5191 20.5908 17.6958 20.4772 17.7287C20.3637 17.7617 20.2474 17.6233 20.0149 17.3464L19.0875 16.2423C18.9614 16.0922 18.8983 16.0171 18.8142 16.0171C18.7301 16.0171 18.667 16.0922 18.5409 16.2423L17.6131 17.347C17.3807 17.6237 17.2645 17.762 17.151 17.7291C17.0375 17.6961 17.022 17.5196 16.991 17.1665L16.625 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Raw02Icon;
