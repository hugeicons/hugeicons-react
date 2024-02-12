import * as React from "react";
import type { SVGProps } from "react";

interface Store02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Store02Icon = (props: Store02IconProps) => {
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
        <path d="M2.9668 10.4956V15.4974C2.9668 18.3268 2.9668 19.7415 3.84548 20.6205C4.72416 21.4996 6.13837 21.4996 8.9668 21.4996H14.9668C17.7952 21.4996 19.2094 21.4996 20.0881 20.6205C20.9668 19.7415 20.9668 18.3268 20.9668 15.4974V10.4956" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.9668 17.9932H10.9668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.1038 8.41799C9.82182 9.43639 8.79628 11.1931 6.84777 11.4477C5.12733 11.6725 3.82246 10.9216 3.48916 10.6076C3.12168 10.353 2.28416 9.53823 2.07906 9.02903C1.87395 8.51983 2.11324 7.41657 2.28416 6.96678L2.96743 4.98839C3.13423 4.49147 3.5247 3.31617 3.92501 2.91864C4.32533 2.52111 5.13581 2.50381 5.4694 2.50381H12.4749C14.2781 2.52929 18.2209 2.48774 19.0003 2.50382C19.7797 2.5199 20.2481 3.17324 20.3848 3.4533C21.5477 6.27012 22 7.88334 22 8.57075C21.8482 9.30407 21.22 10.6868 19.0003 11.295C16.6933 11.9271 15.3854 10.6976 14.9751 10.2257M9.15522 10.2257C9.47997 10.6245 10.4987 11.4274 11.9754 11.4477C13.4522 11.4681 14.7273 10.4378 15.1802 9.92013C15.3084 9.76737 15.5853 9.31419 15.8725 8.41799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Store02Icon;
