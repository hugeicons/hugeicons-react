import * as React from "react";
import type { SVGProps } from "react";

interface PaymentSuccess02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PaymentSuccess02Icon = (props: PaymentSuccess02IconProps) => {
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
        <path d="M22 11.5V6.11397C22 5.32299 22 4.92751 21.8059 4.51966C21.6952 4.28705 21.443 3.97064 21.241 3.81079C20.8868 3.53051 20.5912 3.46281 20 3.3274C19.0803 3.11675 18.0659 3 17 3C15.0829 3 13.3325 3.37764 12 4C10.6675 4.62236 8.91707 5 7 5C5.93408 5 4.91969 4.88325 4 4.6726C3.04003 4.45273 2 5.12914 2 6.11397V16.886C2 17.677 2 18.0725 2.19412 18.4803C2.30483 18.7129 2.55696 19.0294 2.75898 19.1892C3.11319 19.4695 3.4088 19.5372 4 19.6726C4.91969 19.8833 5.93408 20 7 20C8.46884 20 9.83983 19.7783 11 19.3947" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 19C14 19 15 19 16 21C16 21 19.1765 16 22 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9C13.3807 9 14.5 10.1193 14.5 11.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 12.5L5.5 12.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 10.4922L18.5 10.5012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PaymentSuccess02Icon;
