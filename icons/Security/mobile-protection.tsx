import * as React from "react";
import type { SVGProps } from "react";

interface MobileProtectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MobileProtectionIcon = (props: MobileProtectionIconProps) => {
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
        <path d="M17.5 13.4994V14.9993C17.5 18.2992 17.5 19.9491 16.4749 20.9742C15.4497 21.9993 13.7998 21.9993 10.5 21.9993C7.20017 21.9993 5.55025 21.9993 4.52513 20.9742C3.5 19.9491 3.5 18.2992 3.5 14.9993V8.99933C3.5 5.6995 3.5 4.04959 4.52513 3.02446C5.38151 2.16808 6.67392 2.02711 9 2.00391" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.9991 2C14.5744 2 13.6506 2.90855 12.5581 3.23971C12.1138 3.37436 11.8917 3.44168 11.8018 3.53659C11.7119 3.6315 11.6856 3.77019 11.633 4.04756C11.0696 7.0157 12.301 9.75979 15.2375 10.8279C15.553 10.9426 15.7108 11 16.0007 11C16.2906 11 16.4484 10.9426 16.7639 10.8279C19.7002 9.75978 20.9304 7.01569 20.3669 4.04756C20.3142 3.77014 20.2879 3.63143 20.198 3.53652C20.1081 3.44161 19.886 3.37432 19.4418 3.23974C18.3488 2.90862 17.4239 2 15.9991 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MobileProtectionIcon;
