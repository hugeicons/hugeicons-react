import * as React from "react";
import type { SVGProps } from "react";

interface VictoryFinger03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VictoryFinger03Icon = (props: VictoryFinger03IconProps) => {
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
        <path d="M6.97785 13.5193L6.38287 10.0697M6.38287 10.0697L5.32307 3.92496C5.17099 2.94176 5.70178 2.23752 6.51194 2.03913C7.33174 1.83837 8.18278 2.48343 8.29524 3.18817L9.98985 10.0697L11.6369 3.36439C11.8011 2.3719 12.745 1.9303 13.5648 2.13105C14.375 2.32945 14.8094 2.94176 14.6573 3.92496L13.4796 10.557M6.38287 10.0697C5.69778 10.7527 4.59546 11.9807 4.24884 12.7557C4.16326 12.9471 4.09567 13.1474 4.04752 13.3514C3.81785 14.3242 4.37698 15.4277 5.9517 17.5024C6.58217 18.2414 7.69155 19.6006 7.75795 19.8226C7.76458 19.8447 8.06975 20.2161 7.99137 21.9977M13.8731 8.34081C14.5176 7.87427 16.2465 7.7055 16.9219 9.47296C16.9458 9.6016 16.9839 9.70302 16.9969 9.83068M16.9969 9.83068C17.0556 10.408 16.9969 10.9601 16.9969 11.0297M16.9969 9.83068C17.3807 9.0809 19.6238 10.0004 19.9148 12.7237C20.1672 14.0969 19.8093 15.9664 19.5929 16.6258C19.2711 17.6062 18.381 19.1282 18.1811 19.3558C17.3493 20.4833 17.4351 21.4489 17.4351 21.9827" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VictoryFinger03Icon;
