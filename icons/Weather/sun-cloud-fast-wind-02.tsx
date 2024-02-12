import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudFastWind02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudFastWind02Icon = (props: SunCloudFastWind02IconProps) => {
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
        <path d="M3.1115 8.39442C2.44484 5.97492 3.92135 3.48798 6.40938 2.83967M3.1115 8.39442L2.24805 8.61941M3.1115 8.39442C3.27728 8.99608 3.55998 9.53692 3.92946 10M6.40938 2.83967L6.17802 2M6.40938 2.83967C8.2481 2.36056 10.1247 3.01972 11.248 4.37299M3.5769 4.95375L2.66601 4.44113M10.4746 2.40645L9.94936 3.29328" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.4019 21.9146C14.5462 21.9699 14.7016 22 14.8634 22C15.6281 22 16.248 21.3284 16.248 20.5C16.248 19.6716 15.6281 19 14.8634 19C14.5919 19 14.3387 19.0846 14.125 19.2309C13.0638 20.0225 11.098 21.0378 8.8634 21.301M6.09419 21.1936C5.47597 21.0635 4.85672 20.8541 4.24805 20.5478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.248 21C19.5061 21 20.2037 21 21.248 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.462 9.81274C17.4694 9.8127 17.4769 9.81269 17.4844 9.81269C19.9697 9.81269 21.7521 11.7 21.7521 13.8C21.7281 16.62 18.9681 17.88 17.4681 17.772M17.462 9.81274C17.4768 9.65635 17.4844 9.49797 17.4844 9.33791C17.462 6.66869 15.1078 4.5 12.3081 4.5C9.50851 4.5 7.26814 6.42 7.06496 8.94M17.462 9.81274C17.2881 10.92 16.9881 11.616 16.2681 12.48M7.06496 8.94C4.52852 9.16919 2.76814 11.1 2.74414 13.38C2.88814 15.84 4.62814 16.8439 5.94814 17.4C9.30814 18.72 12.8001 17.76 14.0001 15.84C14.4681 14.76 13.6881 13.56 12.6081 13.38C11.8881 13.2 10.3941 13.608 10.3521 15.12M7.06496 8.94C7.2228 8.92574 7.41919 8.91844 7.58096 8.91844C8.70814 8.94 9.63214 9.324 10.3521 9.804" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudFastWind02Icon;
