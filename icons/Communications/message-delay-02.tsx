import * as React from "react";
import type { SVGProps } from "react";

interface MessageDelay02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageDelay02Icon = (props: MessageDelay02IconProps) => {
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
        <path d="M11.9953 12.5H12.0042M7.99976 12.5H8.00873" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 3.00391C10.9383 3.01227 10.3789 3.03473 9.8294 3.07126C5.64639 3.34932 2.31441 6.72856 2.04024 10.9709C1.98659 11.8011 1.98659 12.6609 2.04024 13.4911C2.1401 15.0362 2.82343 16.4668 3.62791 17.6748C4.09501 18.5205 3.78674 19.576 3.30021 20.498C2.94941 21.1628 2.77401 21.4952 2.91484 21.7353C3.05568 21.9754 3.37026 21.9831 3.99943 21.9984C5.24367 22.0287 6.08268 21.6759 6.74868 21.1848C7.1264 20.9063 7.31527 20.767 7.44544 20.751C7.5756 20.735 7.83177 20.8405 8.34401 21.0515C8.8044 21.2411 9.33896 21.3581 9.8294 21.3907C11.2536 21.4854 12.7435 21.4856 14.1706 21.3907C18.3536 21.1127 21.6856 17.7334 21.9598 13.4911C21.9809 13.1642 21.9937 12.8327 21.9982 12.5002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6L19 5M22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MessageDelay02Icon;
