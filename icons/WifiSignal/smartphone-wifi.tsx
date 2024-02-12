import * as React from "react";
import type { SVGProps } from "react";

interface SmartphoneWifiIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartphoneWifiIcon = (props: SmartphoneWifiIconProps) => {
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
        <path d="M8 6C6.37274 6.02975 5.43781 6.1682 4.80546 6.81237C4 7.63289 4 8.9535 4 11.5947V16.3971C4 19.0384 4 20.359 4.80546 21.1795C5.61091 22 6.90728 22 9.5 22C12.0927 22 13.3891 22 14.1945 21.1795C15 20.359 15 19.0384 15 16.3971V13.4958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 19H9.50898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3.8472C11.436 2.67893 13.1511 2 14.9932 2C16.8411 2 18.5612 2.68322 20 3.85827M17.7178 7C16.8977 6.48859 15.9724 6.20085 14.9932 6.20085C14.019 6.20085 13.098 6.4857 12.281 6.99231" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 10H15.0064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartphoneWifiIcon;
