import * as React from "react";
import type { SVGProps } from "react";

interface MoneySendSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneySendSquareIcon = (props: MoneySendSquareIconProps) => {
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
        <path d="M12.002 9.00098C10.8974 9.00098 10.002 9.67255 10.002 10.501C10.002 11.3294 10.8974 12.001 12.002 12.001C13.1065 12.001 14.002 12.6726 14.002 13.501C14.002 14.3294 13.1065 15.001 12.002 15.001M12.002 9.00098C12.8728 9.00098 13.6136 9.41838 13.8881 10.001M12.002 9.00098V8.00098M12.002 15.001C11.1311 15.001 10.3903 14.5836 10.1158 14.001M12.002 15.001V16.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 2.50098C13.5 2.50098 12.6839 2.50098 12 2.50098C7.52166 2.50098 5.28249 2.50098 3.89124 3.89223C2.5 5.28347 2.5 7.52264 2.5 12.001C2.5 16.4793 2.5 18.7185 3.89124 20.1098C5.28249 21.501 7.52166 21.501 12 21.501C16.4783 21.501 18.7175 21.501 20.1088 20.1098C21.5 18.7185 21.5 16.4793 21.5 12.001C21.5 11.3171 21.5 10.501 21.5 10.501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.5 7.49902L20.6758 3.32082M21.5 6.97726L21.3818 3.88577C21.3818 3.15713 20.9467 2.70314 20.1542 2.64588L17.0302 2.49902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoneySendSquareIcon;
