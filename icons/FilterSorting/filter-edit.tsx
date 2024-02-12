import * as React from "react";
import type { SVGProps } from "react";

interface FilterEditIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FilterEditIcon = (props: FilterEditIconProps) => {
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
        <path d="M13.2423 17.5C13.1952 17.8033 13.1528 18.0485 13.1161 18.2442C12.8873 19.4657 11.1552 20.2006 10.228 20.8563C9.67601 21.2466 9.00625 20.782 8.93473 20.1778C8.79838 19.0261 8.54156 16.6864 8.26122 13.2614C8.23604 12.9539 8.08681 12.6761 7.85941 12.5061C5.37096 10.6456 3.59759 8.59915 2.62929 7.44867C2.32955 7.09253 2.23133 6.8319 2.17228 6.3728C1.97006 4.8008 1.86896 4.0148 2.3299 3.5074C2.79085 3 3.60599 3 5.23628 3H16.7677C18.398 3 19.2131 3 19.674 3.5074C19.8976 3.75346 19.9889 4.06504 20.0007 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8624 7.43922L21.5567 8.13158C22.1441 8.71737 22.1441 9.66711 21.5567 10.2529L17.9192 13.9486C17.6331 14.2339 17.2671 14.4263 16.8693 14.5004L14.6149 14.9884C14.259 15.0655 13.942 14.7503 14.0183 14.3951L14.4981 12.1598C14.5724 11.7631 14.7653 11.3981 15.0515 11.1128L18.7352 7.43921C19.3226 6.85343 20.275 6.85343 20.8624 7.43922Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FilterEditIcon;
