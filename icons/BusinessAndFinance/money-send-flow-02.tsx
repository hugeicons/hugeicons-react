import * as React from "react";
import type { SVGProps } from "react";

interface MoneySendFlow02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneySendFlow02Icon = (props: MoneySendFlow02IconProps) => {
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
        <path d="M19 19C19.3437 18.9498 19.6777 18.887 20 18.8125C20.5912 18.676 20.8868 18.6077 21.241 18.3251C21.443 18.1639 21.6952 17.8448 21.8059 17.6103C22 17.199 22 16.8002 22 16.0026V5.14011C22 4.14701 20.96 3.46492 20 3.68664C19.0803 3.89906 18.0659 4.01679 17 4.01679C15.0829 4.01679 13.3325 3.63598 12 3.00839C10.6675 2.38081 8.91707 2 7 2C5.93408 2 4.91969 2.11773 4 2.33014C3.4088 2.46669 3.11319 2.53497 2.75898 2.81759C2.55696 2.97878 2.30483 3.29786 2.19412 3.53242C2 3.94368 2 4.34249 2 5.14011V16.0026C2 16.9957 3.04003 17.6778 4 17.456C4.32232 17.3816 4.65627 17.3188 5 17.2686" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 9.5L5.5 9.49102" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 11.5078L18.5 11.4988" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V18M8 19L8 17M16 21V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoneySendFlow02Icon;
