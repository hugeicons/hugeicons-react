import * as React from "react";
import type { SVGProps } from "react";

interface TaskEdit02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TaskEdit02Icon = (props: TaskEdit02IconProps) => {
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
        <path d="M7.01416 16.0029H11.0142M7.01416 11.0054H15.0142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0142 22H11.0142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5107 22C6.33909 21.975 5.53909 21.9 4.76409 21.6752C3.71479 21.4003 2.94893 20.4757 2.72409 19.1764C2.43909 17.952 2.53909 14.9285 2.51404 11.3302C2.51611 8.5388 2.38908 5.85793 2.83908 4.33368C3.11408 3.83392 3.33908 2.00982 7.06409 2.03481C7.68909 2.00982 14.3141 1.95984 15.3641 2.05979C18.8641 2.13476 19.2141 3.93387 19.4141 5.63304C19.5409 6.88243 19.5141 8.88144 19.5141 11.0054M7.01409 2.00982C7.31409 3.63402 7.28909 4.68351 8.38909 4.93338C8.86409 5.00835 9.94938 5.00635 11.1141 5.00835C12.1537 5.01013 13.2141 5.01951 13.6891 4.9084C14.8641 4.63353 14.7391 3.18424 15.0391 2.00982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.2785 14.3789C16.9044 15.7782 14.2561 18.277 14.2561 18.4519C14.0426 18.7486 13.8564 19.3515 13.7315 20.2011C13.5746 20.9886 13.3867 21.6753 13.6066 21.8752C13.8265 22.0751 14.6543 21.9066 15.5303 21.7253C16.2298 21.6504 16.8794 21.4005 17.2042 21.1506C17.6789 20.7306 20.9017 17.4774 21.2765 17.0526C21.5513 16.6778 21.5763 15.9781 21.3364 15.5533C21.2015 15.2535 20.3521 14.4539 20.0773 14.229C19.5776 13.9291 18.8781 13.8792 18.2785 14.3789Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TaskEdit02Icon;
