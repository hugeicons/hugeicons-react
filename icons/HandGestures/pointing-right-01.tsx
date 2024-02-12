import * as React from "react";
import type { SVGProps } from "react";

interface PointingRight01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingRight01Icon = (props: PointingRight01IconProps) => {
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
        <path d="M22.0027 4.50049H16.0063M22.0027 4.50049C22.0027 3.80026 20.0096 2.49202 19.5042 2.00049M22.0027 4.50049C22.0027 5.20072 20.0096 6.50896 19.5042 7.00049" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.99816 10.8266L2.94625 10.8266C3.59136 10.8266 4.2193 10.6178 4.73702 10.2311L9.63686 6.57098C10.202 6.14885 10.9031 5.8117 11.5503 6.09039C12.5981 6.54155 13.2788 7.81436 11.7079 9.37227L9.99955 10.9706L20.4162 10.9706C22.4581 11.0268 22.5593 14.3171 20.4162 14.4578L14.4799 14.4578C14.6709 15.9388 13.6281 22.9156 9.21058 21.8986C9.0007 21.8503 8.78772 21.8021 8.57757 21.755C7.65937 21.5492 6.02293 20.941 5.06625 20.2702C4.07032 19.5719 3.07832 19.8183 1.99816 19.8183" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingRight01Icon;
