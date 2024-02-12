import * as React from "react";
import type { SVGProps } from "react";

interface Minimize01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Minimize01Icon = (props: Minimize01IconProps) => {
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
        <path d="M19.9264 22.2511V20.6921C19.9264 20.2895 20.0525 19.8985 20.2639 19.5553C21.7583 17.1291 22.2279 14.5267 21.9002 13.5131C20.857 11.3521 17.3758 10.5018 15.76 10.2991L16.7966 5.13937C16.9705 4.32113 16.3513 3.49745 15.4135 3.29963C14.4758 3.1018 13.5746 3.60475 13.4007 4.42299L11.3462 14.089L8.77462 12.4516C8.77462 12.4516 7.47969 11.4162 6.44041 12.4516C5.40114 13.487 6.44041 14.777 6.44041 14.777L10.3488 19.7795C10.6003 20.1013 10.7468 20.4921 10.7688 20.8993L10.8401 22.2172" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.95693 2.23905C6.95693 2.23905 6.7053 4.51022 6.95693 4.7578M6.95693 4.7578C7.28338 5.07891 9.55878 4.80861 9.55878 4.80861M6.95693 4.7578L10.001 1.7489M5.04502 9.25084C5.04502 9.25084 5.29665 6.97968 5.04502 6.73209M5.04502 6.73209C4.71857 6.41098 2.44317 6.68128 2.44317 6.68128M5.04502 6.73209L2.00098 9.74099" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Minimize01Icon;
