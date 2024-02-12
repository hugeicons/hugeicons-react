import * as React from "react";
import type { SVGProps } from "react";

interface BluetoothNotConnectedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BluetoothNotConnectedIcon = (props: BluetoothNotConnectedIconProps) => {
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
        <path d="M4 3.99316L20 20.0139" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.0094 7.97988C12.0094 6.85164 11.8211 4.37383 12.4988 3.62166C13.3394 2.88749 16.666 5.7015 18.2835 7.05527C17.4525 7.90748 17.0866 8.7261 14.6659 10.5224" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5002 17.5094C14.6596 19.5714 13.4835 20.7984 12.6288 20.4349C12.5439 20.3988 12.4741 20.3347 12.427 20.2553C11.9013 19.3692 12.0095 17.0485 12.0095 15.9707V11.9932L4.97754 16.7062" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BluetoothNotConnectedIcon;
