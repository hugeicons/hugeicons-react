import * as React from "react";
import type { SVGProps } from "react";

interface Store04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Store04Icon = (props: Store04IconProps) => {
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
        <path d="M3 10.9866V15.4932C3 18.3257 3 19.742 3.87868 20.622C4.75736 21.502 6.17157 21.502 9 21.502H15C17.8284 21.502 19.2426 21.502 20.1213 20.622C21 19.742 21 18.3257 21 15.4932V10.9866" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17.9741H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.7957 2.50049L6.14983 2.52954C4.41166 2.44011 3.966 3.77859 3.966 4.4329C3.966 5.01809 3.89055 5.8712 2.82524 7.47462C1.75993 9.07804 1.83998 9.55437 2.44071 10.6644C2.93928 11.5857 4.20741 11.9455 4.86862 12.0061C6.96883 12.0538 7.99065 10.2398 7.99065 8.96495C9.03251 12.1683 11.9955 12.1683 13.3158 11.802C14.6385 11.435 15.7717 10.1214 16.0391 8.96495C16.195 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.7599 11.5016 21.3848 10.9168C22.0096 10.332 22.4107 9.03364 21.2967 7.60666C20.5285 6.62257 20.2084 5.69548 20.1032 4.73462C20.0423 4.17787 19.9888 3.57961 19.5971 3.1989C19.0247 2.64253 18.2035 2.47372 17.7957 2.50049Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Store04Icon;
