import * as React from "react";
import type { SVGProps } from "react";

interface ElectricHome02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ElectricHome02Icon = (props: ElectricHome02IconProps) => {
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
        <path d="M14.0069 10.0034V12.502M10.0232 12.502V10.0034M8.53384 13.3828C8.49476 12.908 8.90282 12.5029 9.4202 12.5029H14.6138C15.1312 12.5029 15.5392 12.908 15.5002 13.3828L15.3933 14.6799C15.3165 15.6124 14.9805 16.5111 14.4175 17.2896L14.0684 17.7722C13.7389 18.2279 13.1834 18.5018 12.5885 18.5018H11.4455C10.8506 18.5018 10.2952 18.2279 9.96553 17.7722L9.6165 17.2896C9.05345 16.5111 8.7174 15.6124 8.64063 14.6799L8.53384 13.3828Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.0031 22.0011C16.7848 21.9819 17.5484 21.8878 18.4889 21.5012C19.2819 21.1767 19.7798 20.7223 20.2117 19.9159C20.8599 18.7056 21.0761 17.3176 21.2696 15.9573L21.9746 11.0032C22.0261 10.2096 22.0008 9.61801 21.8159 9.03708C21.4627 7.92786 20.5099 7.14489 19.5815 6.44685C15.262 3.19935 13.2318 1.90168 12.0154 2.00497C10.862 1.91379 9.29127 2.84603 4.30666 6.56383C3.47477 7.1843 2.64133 7.86217 2.26246 8.83056C1.73211 10.1862 2.13955 11.7209 2.36292 13.1599C2.62553 14.8518 2.93738 16.9159 3.49765 19.2825C3.53207 19.4279 3.58086 19.5703 3.64641 19.7045C4.14338 20.7217 4.57979 21.1458 5.54185 21.5012C6.54068 21.8702 9.67378 22.1919 11.2453 21.8383C11.7753 21.7191 12.0154 21.1928 12.0154 20.6475V18.5018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ElectricHome02Icon;
