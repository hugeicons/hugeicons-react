import * as React from "react";
import type { SVGProps } from "react";

interface ScreenAddToHomeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ScreenAddToHomeIcon = (props: ScreenAddToHomeIconProps) => {
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
        <path d="M7.06899 5C7.20477 4.13105 7.46172 3.5086 7.94804 3.02513C8.97918 2 10.6388 2 13.958 2C17.2773 2 18.9369 2 19.968 3.02513C20.9991 4.05025 20.9991 5.70017 20.9991 9V15C20.9991 18.2998 20.9991 19.9497 19.968 20.9749C18.9369 22 17.2773 22 13.958 22C10.6388 22 8.97918 22 7.94804 20.9749C7.29268 20.3233 7.05384 19.4194 6.9668 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 19H14.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.44344 7.95215H9.92289C10.3586 7.96711 11.0175 8.49825 11.0175 8.9086V12.5141M2.99902 15.9521L10.2668 8.74919" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ScreenAddToHomeIcon;
