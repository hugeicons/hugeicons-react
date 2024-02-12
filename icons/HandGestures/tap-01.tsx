import * as React from "react";
import type { SVGProps } from "react";

interface Tap01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap01Icon = (props: Tap01IconProps) => {
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
        <path d="M6.98801 6.02675C6.92211 5.10619 7.4891 3.28508 9.04497 2.52362C9.68654 2.13388 11.4476 1.53042 13.1319 2.60569C14.7918 3.66538 14.9038 5.22776 15.0082 6.01639" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.1655 22.0011C17.1202 20.365 17.2234 20.2029 17.343 19.839C17.4626 19.475 18.2993 18.1625 18.5953 17.2248C19.553 14.1909 18.6604 13.5456 17.4703 12.6853C16.1506 11.7312 13.7759 11.2574 12.5414 11.362V6.52308C12.5414 5.69965 11.7521 5.02637 10.9094 5.02637C10.0666 5.02637 9.29184 5.69965 9.29184 6.52308V14.8349L7.57253 13.3441C7.01296 12.751 6.11368 12.6909 5.49994 13.2303C4.91833 13.7415 4.83345 14.6024 5.30449 15.2127L6.43511 16.6774M9.24463 22.0011V21.1478C9.2822 20.095 8.49833 19.4079 7.476 18.0344C7.40234 17.9355 7.33066 17.8398 7.26087 17.7473M7.26087 17.7473C6.95112 17.3364 6.67858 16.9864 6.43511 16.6774M7.26087 17.7473L8.28395 19.0727M7.26087 17.7473L6.43511 16.6774M6.43511 16.6774C5.93524 16.0432 5.5579 15.5822 5.2326 15.1243" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tap01Icon;
