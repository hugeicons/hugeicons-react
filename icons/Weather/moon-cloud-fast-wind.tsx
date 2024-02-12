import * as React from "react";
import type { SVGProps } from "react";

interface MoonCloudFastWindIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoonCloudFastWindIcon = (props: MoonCloudFastWindIconProps) => {
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
        <path d="M14.4019 21.9146C14.5462 21.9699 14.7016 22 14.8634 22C15.6281 22 16.248 21.3284 16.248 20.5C16.248 19.6716 15.6281 19 14.8634 19C14.5919 19 14.3387 19.0846 14.125 19.2309C13.0638 20.0225 11.098 21.0378 8.8634 21.301M6.09419 21.1936C5.47597 21.0635 4.85672 20.8541 4.24805 20.5478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.248 21C19.5061 21 20.2037 21 21.248 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.75726 10C3.95793 9.65619 3.25709 9.04325 2.79155 8.19953C2.24209 7.2037 2.1226 6.07158 2.37281 5.03854C3.35267 5.81349 4.71963 5.94685 5.85024 5.26383C6.98084 4.58081 7.55394 3.27541 7.40248 2C8.38258 2.28978 9.25984 2.96412 9.8093 3.95995C10.0144 4.33173 10.1596 4.72251 10.248 5.12003" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.4464 9.504C17.4538 9.50396 17.4613 9.50395 17.4688 9.50395C19.9541 9.50395 21.7288 11.46 21.7528 13.56C21.7528 16.56 18.9088 17.88 17.4688 17.76M17.4464 9.504C17.4612 9.34761 17.4688 9.18923 17.4688 9.02917C17.4464 6.35995 15.2488 4.00195 12.3088 4.00195C9.54875 4.00195 7.29466 5.92942 7.05275 8.60151M17.4464 9.504C17.3441 10.5812 16.9888 11.4 16.2688 12.264M7.05275 8.60151C4.51631 8.8307 2.82875 10.86 2.76875 12.9C2.58875 15.24 4.32875 16.68 5.77346 17.316C9.24875 18.78 12.7888 17.7 13.9528 15.84C14.4688 14.82 13.8974 13.5371 12.6688 13.23C11.8288 13.02 10.3888 13.5 10.3468 15.012M7.05275 8.60151C7.21059 8.58725 7.40698 8.57995 7.56875 8.57995C8.76875 8.60151 9.63275 9.02395 10.3528 9.50395" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoonCloudFastWindIcon;
