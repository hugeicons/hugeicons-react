import * as React from "react";
import type { SVGProps } from "react";

interface SwipeRight08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeRight08Icon = (props: SwipeRight08IconProps) => {
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
        <path d="M20.9982 4.49529H15.0078M20.9982 4.49529C20.9982 3.79583 19.0071 2.48903 18.5022 1.99805M20.9982 4.49529C20.9982 5.19475 19.0071 6.50154 18.5022 6.99253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.53743 14.4459V9.9761M6.53743 9.9761V4.45337C6.53743 3.63264 7.22182 2.97119 8.04309 2.97119C8.86436 2.97119 9.51151 3.63264 9.51151 4.45337V8.45484M6.53743 9.9761C5.22061 11.1686 3.80359 12.675 3.61277 13.0609C2.72488 14.4116 2.81794 15.0654 3.80743 16.7181C4.64786 18.1218 5.77811 19.6796 5.84409 19.7543C6.51561 20.5149 6.38209 20.515 7.35542 21.2292C8.22457 21.832 10.0274 22.252 14.2539 21.832C17.6969 21.3005 18.5218 18.297 18.5039 16.8616V13.3171C18.7184 10.371 17.4862 10.238 15.2487 9.94802M9.51151 8.45484V10.9819M9.51151 8.45484C10.0699 7.54489 12.0977 7.91262 12.493 9.63092M12.5287 10.9779V9.9761C12.5287 9.89713 12.5248 9.81791 12.5136 9.73978M12.493 9.63092C12.4947 9.63815 12.4963 9.64541 12.4979 9.65269C12.5043 9.68152 12.5094 9.71057 12.5136 9.73978M12.493 9.63092C12.4971 9.66594 12.5039 9.70222 12.5136 9.73978M12.493 9.63092C12.3526 8.43327 15.3894 8.72522 15.513 10.8315V11.9762" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeRight08Icon;
