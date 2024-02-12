import * as React from "react";
import type { SVGProps } from "react";

interface MoneyNotFound04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyNotFound04Icon = (props: MoneyNotFound04IconProps) => {
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
        <path d="M5.5 13L5.5 13.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 10.9922L18.5 11.0012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 18.548C18 18.548 17.0738 18.548 16.5455 18.548C14.6865 18.548 12.9891 18.9166 11.697 19.524C10.4048 20.1314 8.70746 20.5 6.84848 20.5C5.81486 20.5 4.83121 20.3861 3.93939 20.1805C3.36611 20.0483 3.07946 19.9822 2.73599 19.7087C2.54009 19.5527 2.29559 19.2439 2.18823 19.0168C2 18.6188 2 18.2328 2 17.4608V6.94737C2 5.98619 3.00851 5.32602 3.93939 5.54061C4.37533 5.64111 4.919 5.80594 5.39394 5.86004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9999 17.5V6.61397C21.9999 5.12036 21.5816 4.18968 19.9999 3.8274C19.0802 3.61675 18.0658 3.5 16.9999 3.5C15.0828 3.5 13.3324 3.87764 11.9999 4.5C11.2804 4.83602 10.4235 5.32757 9.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.7678 13.768C13.3154 14.2204 12.6904 14.5002 12 14.5002C10.6193 14.5002 9.5 13.3809 9.5 12.0002C9.5 11.3098 9.77982 10.6848 10.2322 10.2324" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoneyNotFound04Icon;
