import * as React from "react";
import type { SVGProps } from "react";

interface SettingDone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SettingDone01Icon = (props: SettingDone01IconProps) => {
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
        <path d="M20.232 10.0545C20.712 9.51454 21.54 8.69853 21.4958 8.36621C21.5298 8.04299 21.3548 7.73937 21.0049 7.13212L20.5114 6.27552C20.1381 5.62769 19.9514 5.30377 19.6338 5.17461C19.3163 5.04544 18.9571 5.14737 18.2388 5.35121L17.0185 5.69491C16.5599 5.80066 16.0788 5.74067 15.66 5.52552L15.3231 5.33115C14.9641 5.10116 14.6879 4.76206 14.535 4.36347L14.201 3.36608C13.9815 2.70607 13.8717 2.37606 13.6103 2.1873C13.3489 1.99854 13.0017 1.99854 12.3074 1.99854H11.1926C10.4982 1.99854 10.151 1.99854 9.88973 2.1873C9.62833 2.37606 9.51853 2.70607 9.29893 3.36608L8.96503 4.36347C8.81213 4.76206 8.53593 5.10116 8.17683 5.33115L7.83993 5.52552C7.42123 5.74067 6.94003 5.80066 6.48143 5.69491L5.26124 5.35121C4.54294 5.14737 4.18374 5.04544 3.86614 5.17461C3.54854 5.30377 3.36194 5.62769 2.98864 6.27552L2.49504 7.13212C2.14515 7.73937 1.97025 8.04299 2.00415 8.36621C2.03815 8.68943 2.27235 8.94991 2.74074 9.47085L3.77184 10.6235C4.02374 10.9425 4.20274 11.4985 4.20274 11.9983C4.20274 12.4985 4.02384 13.0543 3.77184 13.3734L2.74074 14.5261C2.27235 15.047 2.03815 15.3075 2.00415 15.6307C1.97025 15.954 2.14515 16.2576 2.49504 16.8648L2.98864 17.7214C3.36194 18.3692 3.54854 18.6932 3.86614 18.8223C4.18374 18.9515 4.54294 18.8496 5.26124 18.6457L6.48143 18.302C6.94013 18.1962 7.42133 18.2563 7.84013 18.4715L8.17693 18.6659C8.53603 18.8959 8.81213 19.2349 8.96493 19.6335L9.29893 20.631C9.51853 21.291 9.63993 21.6341 9.84 21.7785C9.9 21.8218 10.14 22.0185 10.728 22.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 17.2184C15 17.2184 16 17.5024 16.5 18.5024C16.5 18.5024 17.5962 16.0024 19.008 15.5024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 16.9985C22 19.7599 19.7614 21.9985 17 21.9985C14.2386 21.9985 12 19.7599 12 16.9985C12 14.2371 14.2386 11.9985 17 11.9985C19.7614 11.9985 22 14.2371 22 16.9985Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.1599 9.44263C13.3199 8.75863 12.6599 8.49463 11.6999 8.49463C9.89986 8.51863 8.25586 10.0056 8.25586 11.9386C8.25586 13.0043 8.57986 13.6786 9.19186 14.3866" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SettingDone01Icon;
