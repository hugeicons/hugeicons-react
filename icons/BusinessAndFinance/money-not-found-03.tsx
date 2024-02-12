import * as React from "react";
import type { SVGProps } from "react";

interface MoneyNotFound03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyNotFound03Icon = (props: MoneyNotFound03IconProps) => {
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
        <path d="M13.7678 13.768C13.3154 14.2204 12.6904 14.5002 12 14.5002C10.6193 14.5002 9.5 13.3809 9.5 12.0002C9.5 11.3098 9.77982 10.6848 10.2322 10.2324" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 11.1415C18.6749 11.0944 18.341 11.0586 18 11.0347M6 12.9653C5.65897 12.9415 5.32511 12.9056 5 12.8585" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 18.548C18 18.548 17.0738 18.548 16.5455 18.548C14.6865 18.548 12.9891 18.9166 11.697 19.524C10.4048 20.1314 8.70746 20.5 6.84848 20.5C5.81486 20.5 4.83121 20.3861 3.93939 20.1805C3.36611 20.0483 3.07946 19.9822 2.73599 19.7087C2.54009 19.5527 2.29559 19.2439 2.18823 19.0168C2 18.6188 2 18.2328 2 17.4608V6.94737C2 5.98619 3.00851 5.32602 3.93939 5.54061C4.37533 5.64111 4.919 5.80594 5.39394 5.86004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0001 17.5V6.61397C22.0001 5.12036 21.5818 4.18968 20.0001 3.8274C19.0804 3.61675 18.066 3.5 17.0001 3.5C15.083 3.5 13.3326 3.87764 12.0001 4.5C11.2807 4.83602 10.4238 5.32757 9.50024 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoneyNotFound03Icon;
