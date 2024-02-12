import * as React from "react";
import type { SVGProps } from "react";

interface Folder02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Folder02Icon = (props: Folder02IconProps) => {
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
        <path d="M11.5704 21H10.507C6.49678 21 4.49165 21 3.24583 19.4542C2 17.9083 2 15.4204 2 10.4444V7.21895C2 5.30157 2 4.34287 2.32354 3.62351C2.55416 3.11072 2.89517 2.68761 3.30843 2.40145C3.88819 2 4.66083 2 6.20611 2C7.19611 2 7.69111 2 8.12443 2.20162C9.11377 2.66196 9.52173 3.77711 9.96816 4.88497L10.507 6.22222M7.00413 6.22222H15.5487C17.3409 6.22222 18.2369 6.22222 18.8806 6.7559C19.1593 6.98694 19.3986 7.28381 19.5848 7.62958C19.8747 8.16804 19.9692 8.84883 20 9.91667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5956 12.5755C5.02693 11.4264 5.24259 10.8518 5.66347 10.491C6.34287 9.90853 7.31965 10.0062 8.15669 10.0062H17.2524C19.7292 10.0062 20.9676 10.0062 21.5856 10.8031C22.6464 12.1711 21.3949 14.3902 20.8908 15.7332C19.9871 18.141 19.5352 19.3449 18.6352 20.0791C17.2638 21.1979 15.269 20.9835 13.6139 20.9835H9.93724C6.3942 20.9835 4.62269 20.9835 3.70143 19.8866C2.00075 17.8617 3.83072 14.6133 4.5956 12.5755Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Folder02Icon;
