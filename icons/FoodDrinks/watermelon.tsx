import * as React from "react";
import type { SVGProps } from "react";

interface WatermelonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WatermelonIcon = (props: WatermelonIconProps) => {
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
        <path d="M15.8868 4.07642C17.1488 5.5519 17.9211 7.53325 17.9211 9.71162C17.9211 14.2718 14.5364 17.9686 10.3612 17.9686C8.04167 17.9686 6.03867 16.9088 4.67822 15.224" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.4175 3.57264L13.3562 6.41521C13.2666 6.49843 13.2726 6.6417 13.3537 6.7333C14.0308 7.49874 14.048 9.14282 13.2715 10.1704C12.4455 11.2635 11.2161 11.1152 10.774 10.8877L10.5235 11.5914C10.4287 11.8576 10.1611 12.0218 9.88068 11.9857L8.23877 11.7743C8.11395 11.7582 7.98884 11.8017 7.90094 11.8917L4.97952 14.8834L3.58065 16.3785C2.72253 17.2956 2.8051 18.7533 3.9034 19.363C7.37659 21.2911 12.9566 22.3317 17.8425 17.7358C22.3576 13.0697 21.2088 7.4076 19.431 3.95697C18.844 2.81772 17.3568 2.70045 16.4175 3.57264Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WatermelonIcon;
