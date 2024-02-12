import * as React from "react";
import type { SVGProps } from "react";

interface BrokenBoneIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BrokenBoneIcon = (props: BrokenBoneIconProps) => {
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
        <path d="M6.28266 19.233C6.11911 19.7294 5.81343 20.1328 5.43088 20.4088M5.43088 20.4088C4.87511 20.8099 4.15708 20.9424 3.47686 20.7015C2.32843 20.2948 1.72265 18.978 2.12382 17.7603C2.43197 16.8249 3.24462 16.2201 4.12541 16.1742C4.57355 16.1509 5.04512 15.9411 5.18553 15.5149L6.67292 11L8 13L10 12L8.49202 16.7315C8.36086 17.1431 8.59532 17.575 8.92471 17.8544C9.62114 18.4451 9.92359 19.4585 9.60974 20.4111C9.20857 21.6289 7.95237 22.2863 6.80394 21.8797C6.12372 21.6388 5.63387 21.0786 5.43088 20.4088Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5436 5.32421C18.9979 5.07331 19.5019 4.98221 19.9822 5.03295M19.9822 5.03295C20.68 5.10666 21.3277 5.47972 21.7003 6.09705C22.3294 7.13929 21.936 8.48309 20.8216 9.0985C19.9517 9.57893 18.8996 9.47344 18.1806 8.90821C17.8388 8.63947 17.3635 8.49844 16.9863 8.7147L13 11V9L11 7.98057L15.1147 5.70815C15.512 5.48872 15.628 4.97807 15.5636 4.52878C15.4401 3.66842 15.8707 2.77446 16.7211 2.30477C17.8355 1.68936 19.2488 2.03537 19.8778 3.07761C20.2504 3.69494 20.2643 4.41805 19.9822 5.03295Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8L5 8M9 6L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 16L13 18M15 14L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BrokenBoneIcon;
