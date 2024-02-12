import * as React from "react";
import type { SVGProps } from "react";

interface WorkoutRunIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkoutRunIcon = (props: WorkoutRunIconProps) => {
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
        <path d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 20.9999L14.3359 18.384C14.1161 17.5182 13.6615 16.7276 13.0207 16.0965L11.5 14.599M6 11.1526C7 9.18281 8.53767 8.04144 12 8.0005M12 8.0005C12.2186 7.99792 12.5444 7.99714 12.8698 7.9972C13.3747 7.99728 13.6271 7.99732 13.8282 8.09128C14.0293 8.18524 14.2356 8.4317 14.6482 8.92463C14.7664 9.06586 14.8878 9.1924 15 9.27657M12 8.0005L10.7309 9.95871C10.0332 11.0353 9.68429 11.5736 9.67069 12.1388C9.66463 12.3906 9.70617 12.6412 9.79313 12.8775C9.98834 13.4081 10.4922 13.8051 11.5 14.599M15 9.27657C16.1547 10.1425 17.9627 10.4912 20 8.19827M15 9.27657L11.5 14.599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkoutRunIcon;
