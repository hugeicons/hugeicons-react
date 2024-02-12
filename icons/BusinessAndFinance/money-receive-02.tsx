import * as React from "react";
import type { SVGProps } from "react";

interface MoneyReceive02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyReceive02Icon = (props: MoneyReceive02IconProps) => {
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
        <path d="M18 5.44232C18 5.44232 20 4.43881 21.241 5.45484C21.443 5.6182 21.6952 5.94158 21.8059 6.1793C22 6.59611 22 7.0003 22 7.80867V18.8176C22 19.8241 20.96 20.5154 20 20.2907C19.0803 20.0754 18.0659 19.9561 17 19.9561C15.0829 19.9561 13.3325 20.342 12 20.9781C10.6675 21.6141 8.91707 22.0001 7 22.0001C5.93408 22.0001 4.91969 21.8808 4 21.6655C3.4088 21.5271 3.11319 21.4579 2.75898 21.1715C2.55696 21.0081 2.30483 20.6847 2.19412 20.447C2 20.0302 2 19.626 2 18.8176V7.80867C2 6.80219 3.04003 6.1109 4 6.33561C4.77473 6.51696 5.61667 6.63021 6.5 6.6614" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 14.5L5.5 14.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 12.4922L18.5 12.5012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 5.5C9.99153 6.0057 11.2998 8 12 8M14.5 5.5C14.0085 6.0057 12.7002 8 12 8M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoneyReceive02Icon;
