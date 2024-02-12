import * as React from "react";
import type { SVGProps } from "react";

interface Tap07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap07Icon = (props: Tap07IconProps) => {
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
        <path d="M13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3182 8.92107V6.36376C10.3182 5.61064 9.70766 5.00012 8.95455 5.00012C8.20143 5.00012 7.59091 5.61064 7.59091 6.36376V14.2557L6.11791 12.8014C5.47161 12.1633 4.40702 12.2216 3.83605 12.9262C3.39916 13.4654 3.38709 14.2281 3.80671 14.7805L6.53761 18.3755C7.15737 19.1913 7.46726 19.5992 7.84017 19.9163C8.4091 20.4 9.09086 20.7366 9.82417 20.8957C10.3048 21 10.8213 21 11.8542 21C13.8238 21 14.8086 21 15.5926 20.7029C16.7915 20.2485 17.7388 19.3132 18.199 18.1296C18.5 17.3555 18.5 16.3832 18.5 14.4386V12.2265C18.5 11.3517 17.8574 10.6051 16.9807 10.4613L16.6694 10.4103C16.2 10.3333 15.7727 10.6895 15.7727 11.1579M10.3182 8.92107L10.8434 8.66262C11.0958 8.53839 11.3782 8.45819 11.6527 8.52295C12.4516 8.71145 13.0455 9.41906 13.0455 10.2632M10.3182 8.92107V11.1579M13.0455 10.2632V11.1579M13.0455 10.2632C13.0455 9.76903 13.4525 9.36844 13.9545 9.36844C14.9587 9.36844 15.7727 10.1696 15.7727 11.1579M15.7727 11.1579V12.0527" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tap07Icon;
