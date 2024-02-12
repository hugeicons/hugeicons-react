import * as React from "react";
import type { SVGProps } from "react";

interface LockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LockedIcon = (props: LockedIconProps) => {
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
        <path d="M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 10.5548C9.5 9.71317 9.36781 8.41374 9.87602 7.65606C10.9985 5.98254 13.38 6.20484 14.22 7.83834C14.6323 8.64006 14.4769 9.76092 14.496 10.5548M9.5 10.5548C8.20267 10.5548 7.93843 11.2975 7.74002 11.8801C7.55687 12.5354 7.37042 14.1001 7.65602 15.8146C7.86969 16.9068 8.70479 17.3871 9.42297 17.4481C10.1098 17.5063 13.0097 17.4841 13.8492 17.4841C15.1501 17.4841 15.9624 17.1981 16.344 15.8874C16.5272 14.868 16.5773 13.0451 16.272 11.8801C15.8676 10.715 15.0523 10.5548 14.496 10.5548M9.5 10.5548C10.8736 10.5004 13.7107 10.5111 14.496 10.5548" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LockedIcon;
