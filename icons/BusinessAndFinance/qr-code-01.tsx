import * as React from "react";
import type { SVGProps } from "react";

interface QrCode01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const QrCode01Icon = (props: QrCode01IconProps) => {
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
        <path d="M8.99396 2C6.19709 2.06395 4.56347 2.33111 3.44729 3.44729C2.33111 4.56347 2.06395 6.19709 2 8.99396M15.006 2C17.8029 2.06395 19.4365 2.33111 20.5527 3.44729C21.6689 4.56347 21.9361 6.19709 22 8.99396M15.006 22C17.8029 21.9361 19.4365 21.6689 20.5527 20.5527C21.6689 19.4365 21.9361 17.8029 22 15.006M8.99396 22C6.19709 21.9361 4.56347 21.6689 3.44729 20.5527C2.33111 19.4365 2.06395 17.8029 2 15.006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9998 7H17.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6V9C13 10.8856 13 11.8284 12.4142 12.4142C11.8284 13 10.8856 13 9 13H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.29289 6.29289C6 6.58579 6 7.05719 6 8C6 8.94281 6 9.41421 6.29289 9.70711M6.29289 6.29289C6.58579 6 7.05719 6 8 6C8.94281 6 9.41421 6 9.70711 6.29289M6.29289 6.29289C6.29289 6.29289 6.29289 6.29289 6.29289 6.29289ZM6.29289 9.70711C6.58579 10 7.05719 10 8 10C8.94281 10 9.41421 10 9.70711 9.70711M6.29289 9.70711C6.29289 9.70711 6.29289 9.70711 6.29289 9.70711ZM9.70711 9.70711C10 9.41421 10 8.94281 10 8C10 7.05719 10 6.58579 9.70711 6.29289M9.70711 9.70711C9.70711 9.70711 9.70711 9.70711 9.70711 9.70711ZM9.70711 6.29289C9.70711 6.29289 9.70711 6.29289 9.70711 6.29289Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 15C17.4714 15 17.7071 15 17.8536 15.1464C18 15.2929 18 15.5286 18 16V17C18 17.4714 18 17.7071 17.8536 17.8536C17.7071 18 17.4714 18 17 18H15C14.5286 18 14.2929 18 14.1464 17.8536C14 17.7071 14 17.4714 14 17L14 16C14 15.5286 14 15.2929 14.1464 15.1464C14.2929 15 14.5286 15 15 15L17 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 18H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 10L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default QrCode01Icon;
