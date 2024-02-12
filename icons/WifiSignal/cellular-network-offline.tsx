import * as React from "react";
import type { SVGProps } from "react";

interface CellularNetworkOfflineIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CellularNetworkOfflineIcon = (props: CellularNetworkOfflineIconProps) => {
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
        <path d="M12 12L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.5 7.06301C11.6598 7.02188 11.8274 7 12 7C13.1046 7 14 7.89543 14 9C14 9.17265 13.9781 9.34019 13.937 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.9588 6C17.6186 6.86961 18 7.89801 18 9C18 10.102 17.6186 11.1304 16.9588 12M7.04117 12C6.38143 11.1304 6 10.102 6 9C6 8.29588 6.15572 7.62181 6.44027 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.3159 4C21.3796 5.43008 22 7.14984 22 9C22 10.8502 21.3796 12.5699 20.3159 14M3.68409 4C2.62036 5.43008 2 7.14984 2 9C2 10.8502 2.62036 12.5699 3.68409 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CellularNetworkOfflineIcon;
