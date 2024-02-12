import * as React from "react";
import type { SVGProps } from "react";

interface ReminderIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ReminderIcon = (props: ReminderIconProps) => {
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
        <path d="M12.9474 19C12.8695 20.0216 12.6757 20.69 12.1945 21.1799C11.3891 22 10.0927 22 7.5 22C4.90728 22 3.61091 22 2.80546 21.1799C2 20.3598 2 19.0399 2 16.4V11.6C2 8.96017 2 7.64024 2.80546 6.82014C3.29517 6.32152 3.96634 6.12606 5 6.04944" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.49199 19.0006H7.50098" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0785 2.00061H13.9215C11.0208 2.00061 9.57048 2.00061 8.70959 2.90386C7.8487 3.80712 7.93917 5.23389 8.12011 8.08744L8.24595 10.0722C8.28754 10.728 8.30833 11.0559 8.38194 11.3294C8.66622 12.3856 9.53533 13.1903 10.6225 13.4041C10.904 13.4595 11.2373 13.4595 11.904 13.4595C12.8328 13.4595 12.8202 14.2267 12.8202 14.986C12.8202 15.5751 12.8202 15.8696 13.0121 15.9708C13.204 16.072 13.4526 15.9087 13.9499 15.5819L16.9093 13.6372C17.1029 13.51 17.2769 13.4595 17.5048 13.4595C18.727 13.4595 19.3381 13.4595 19.8333 13.2756C21.5492 12.6386 21.6918 11.0532 21.7909 9.49056L21.8799 8.08744C22.0608 5.23389 22.1513 3.80712 21.2904 2.90386C20.4295 2.00061 18.9792 2.00061 16.0785 2.00061Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.8342 8.42918C11.4258 6.7149 14.9993 5.00061 14.9993 5.00061C14.9993 5.00061 18.5746 6.7149 16.1663 8.42918M13.8342 8.42918H16.1663M13.8342 8.42918L13.2507 11.0006M16.1663 8.42918L16.9821 11.0006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ReminderIcon;
