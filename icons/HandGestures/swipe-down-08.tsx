import * as React from "react";
import type { SVGProps } from "react";

interface SwipeDown08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeDown08Icon = (props: SwipeDown08IconProps) => {
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
        <path d="M19.5029 7.98691V1.99976M19.5029 7.98691C18.8038 7.98691 17.4976 5.99688 17.0068 5.49226M19.5029 7.98691C20.202 7.98691 21.5082 5.99688 21.9989 5.49226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.53651 14.4525V9.98738M5.53651 9.98738V4.47038C5.53651 3.65051 6.22091 2.98975 7.04219 2.98975C7.86347 2.98975 8.51063 3.65051 8.51063 4.47038V8.46769M5.53651 9.98738C4.21967 11.1786 2.80262 12.6835 2.6118 13.069C1.7239 14.4183 1.81696 15.0714 2.80647 16.7224C3.64691 18.1246 4.77717 19.6808 4.84315 19.7555C5.51469 20.5152 5.38117 20.5153 6.35451 21.2287C7.22367 21.8309 9.02652 22.2505 13.253 21.8309C16.6962 21.3 17.5211 18.2996 17.5032 16.8658V13.3249C17.7176 10.3818 16.4854 10.249 14.2479 9.95932M8.51063 8.46769V10.9921M8.51063 8.46769C9.06899 7.55869 11.0969 7.92604 11.4922 9.64255M11.5279 10.9881V9.98738C11.5279 9.90848 11.5239 9.82934 11.5128 9.75129M11.4922 9.64255C11.4938 9.64978 11.4955 9.65702 11.4971 9.6643C11.5034 9.6931 11.5086 9.72212 11.5128 9.75129M11.4922 9.64255C11.4963 9.67753 11.5031 9.71378 11.5128 9.75129M11.4922 9.64255C11.3518 8.44614 14.3886 8.7378 14.5123 10.8419V11.9854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeDown08Icon;
