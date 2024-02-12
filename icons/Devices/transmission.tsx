import * as React from "react";
import type { SVGProps } from "react";

interface TransmissionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TransmissionIcon = (props: TransmissionIconProps) => {
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
        <path d="M5.6 22C5.6 21.1163 4.88366 20.4 4 20.4M8.8 22C8.8 19.349 6.65097 17.2 4 17.2M12 22C12 17.5817 8.41828 14 4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 11V9.50003C5 6.21252 5 4.56876 5.90797 3.46241C6.07418 3.25989 6.25989 3.07418 6.46241 2.90797C7.56876 2 9.21252 2 12.5 2C15.7875 2 17.4313 2 18.5377 2.90797C18.7402 3.07418 18.9259 3.25989 19.0921 3.46241C20.0001 4.56876 20.0001 6.21252 20.0001 9.50003V17C20.0001 17.9293 20.0001 18.394 19.9232 18.7804C19.6076 20.3671 18.3672 21.6075 16.7804 21.9231C16.394 22 15.9294 22 15.0001 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TransmissionIcon;
