import * as React from "react";
import type { SVGProps } from "react";

interface RollerSkateIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RollerSkateIcon = (props: RollerSkateIconProps) => {
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
        <path d="M3.19492 6.02368C5.31124 3.67541 9.43957 2.78906 10.9298 3.04156C11.0938 4.51869 11.9861 8.27344 13.9343 9.88314C15.8824 11.4928 21.5544 11.5 21.9593 13.6517C22.2035 14.9494 21.3319 16 19.7887 16H4.94536C3.80012 16 3.2275 16 2.65133 15.4575C2.07516 14.9149 2.05322 14.5614 2.00932 13.8543C1.92348 12.4718 2.44907 11.2679 2.82834 10.5934C3.56137 9.2898 3.49695 7.5 3.19492 6.02368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 8.5L11.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 6L10 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16C6 13.4362 4.7934 11.1977 3 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 19H10M14 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RollerSkateIcon;
