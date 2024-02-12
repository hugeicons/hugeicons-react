import * as React from "react";
import type { SVGProps } from "react";

interface MoneyReceiveFlow02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyReceiveFlow02Icon = (props: MoneyReceiveFlow02IconProps) => {
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
        <path d="M19 5C19.3437 5.05019 19.6777 5.11301 20 5.18745C20.5912 5.324 20.8868 5.39228 21.241 5.6749C21.443 5.83609 21.6952 6.15516 21.8059 6.38973C22 6.80099 22 7.1998 22 7.99742V18.8599C22 19.853 20.96 20.5351 20 20.3134C19.0803 20.1009 18.0659 19.9832 17 19.9832C15.0829 19.9832 13.3325 20.364 12 20.9916C10.6675 21.6192 8.91707 22 7 22C5.93408 22 4.91969 21.8823 4 21.6699C3.4088 21.5333 3.11319 21.465 2.75898 21.1824C2.55696 21.0212 2.30483 20.7021 2.19412 20.4676C2 20.0563 2 19.6575 2 18.8599V7.99742C2 7.00432 3.04003 6.32223 4 6.54395C4.32232 6.6184 4.65627 6.68121 5 6.7314" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 14.5L5.5 14.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 12.4922L18.5 12.5012" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V6M8 5L8 7M16 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoneyReceiveFlow02Icon;
