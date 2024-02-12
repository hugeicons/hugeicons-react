import * as React from "react";
import type { SVGProps } from "react";

interface PointingLeft01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingLeft01Icon = (props: PointingLeft01IconProps) => {
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
        <path d="M2.01709 4.49918H8.00914M2.01709 4.49918C2.01709 3.79932 4.00875 2.49176 4.51378 2.00049M2.01709 4.49918C2.01709 5.19904 4.00875 6.5066 4.51378 6.99787" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9999 10.8266L21.0513 10.8266C20.4058 10.8266 19.7774 10.6178 19.2594 10.2311L14.3566 6.57098C13.7911 6.14885 13.0895 5.8117 12.4419 6.09039C11.3935 6.54155 10.7124 7.81436 12.2842 9.37227L13.9936 10.9706L3.57057 10.9706C1.52742 11.0268 1.42614 14.3171 3.57057 14.4578L9.51058 14.4578C9.31944 15.9388 10.3629 22.9156 14.7831 21.8986C14.9931 21.8503 15.2062 21.8021 15.4165 21.755C16.3353 21.5492 17.9727 20.941 18.93 20.2702C19.9265 19.5719 20.9191 19.8183 21.9999 19.8183" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingLeft01Icon;
