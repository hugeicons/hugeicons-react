import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneLanding02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneLanding02Icon = (props: AirplaneLanding02IconProps) => {
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
        <path d="M2.49805 20.001H18.498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.0477 11.0414C21.221 10.6014 21.3977 10.0014 21.4727 9.6014C21.5977 9.1014 21.2977 7.8264 21.0227 6.8514C20.9679 6.63962 20.5309 4.98381 20.4677 4.8014C20.2227 3.9264 19.6227 3.9664 19.1977 4.0264C19.0227 4.0639 17.7977 4.3964 17.5977 4.4964C16.9227 4.9014 16.9977 5.9764 16.7977 6.6764C16.5727 7.7014 16.0477 7.8514 15.4477 7.9514C13.3477 8.1014 8.69766 8.4764 8.69766 8.4764C4.72266 8.8264 2.79766 12.0014 2.51266 14.3264C2.37266 15.3014 3.27266 15.6514 3.74766 15.5264L8.97266 14.1014C9.37266 13.9514 9.69766 14.0764 9.92266 14.2264L12.2477 15.7514C12.7727 16.0264 13.2477 16.0514 13.6727 15.9514L15.8477 15.3564C16.2977 15.3064 16.3872 15.0922 16.4477 14.9264C16.5365 14.6829 16.3458 14.4596 16.1227 14.2514C15.9977 14.0764 15.5977 13.6484 15.4477 13.4834C15.2477 13.2264 14.7588 12.8014 14.7977 12.6264C14.4977 12.5014 15.5673 12.3129 17.3477 11.8264C18.3594 11.5499 19.5263 11.2369 20.0477 11.0414Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default AirplaneLanding02Icon;
