import * as React from "react";
import type { SVGProps } from "react";

interface ConferenceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ConferenceIcon = (props: ConferenceIconProps) => {
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
        <path d="M19 15V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V15C5 17.8284 5 19.2426 5.87868 20.1213C6.75736 21 8.17157 21 11 21H13C15.8284 21 17.2426 21 18.1213 20.1213C19 19.2426 19 17.8284 19 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.9995 8.50873C13.9995 9.61326 13.1041 10.5087 11.9995 10.5087C10.895 10.5087 9.99958 9.61326 9.99958 8.50873C9.99958 7.40419 10.895 6.50879 11.9995 6.50879C13.1041 6.50879 13.9995 7.40419 13.9995 8.50873Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.04443 15.7322C9.10278 14.1029 10.7835 13.4923 11.9995 13.4935C13.2156 13.4948 14.847 14.1029 15.9054 15.7322C15.9738 15.8376 15.9926 15.9673 15.9309 16.0768C15.6834 16.5157 14.9149 17.3866 14.3598 17.4457C13.7221 17.5135 12.0537 17.523 12.0008 17.5233C11.9478 17.523 10.228 17.5135 9.58996 17.4457C9.0349 17.3866 8.26641 16.5157 8.0189 16.0768C7.95714 15.9673 7.976 15.8376 8.04443 15.7322Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ConferenceIcon;
