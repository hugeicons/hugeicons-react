import * as React from "react";
import type { SVGProps } from "react";

interface DeliveryReturn02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliveryReturn02Icon = (props: DeliveryReturn02IconProps) => {
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
        <path d="M20.198 3.00244H3.802C3.05147 3.00244 2.6762 3.00244 2.41637 3.17925C2.28768 3.26681 2.18133 3.38256 2.10567 3.51739C1.9529 3.78963 1.99024 4.15741 2.06493 4.89296C2.18958 6.12068 2.2519 6.73455 2.57823 7.17342C2.74084 7.39213 2.94701 7.5759 3.18414 7.7135C3.65999 7.98964 4.28635 7.98964 5.53908 7.98964H18.4609C19.7136 7.98964 20.34 7.98964 20.8159 7.7135C21.053 7.5759 21.2592 7.39213 21.4218 7.17342C21.7481 6.73455 21.8104 6.12068 21.9351 4.89296C22.0098 4.15741 22.0471 3.78963 21.8943 3.51739C21.8187 3.38256 21.7123 3.26681 21.5836 3.17925C21.3238 3.00244 20.9485 3.00244 20.198 3.00244Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11.0024H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.539 15.9784L17.266 15.9254C18.3523 15.9054 20.503 16.172 20.503 18.4276C20.503 20.768 18.2542 20.9978 17.2408 20.9978C16.2274 20.9978 9.95112 20.9978 8.05112 20.9978C5.9229 20.9978 3.00292 20.5263 3.00293 16.5104L3.00293 7.99658M14.539 15.9784C14.5436 15.7797 14.6209 15.5827 14.771 15.4395L16.4847 13.9858M14.539 15.9784C14.5342 16.1904 14.6121 16.4043 14.7729 16.5565L16.4847 17.9709M20.9802 7.99658V13.0246" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DeliveryReturn02Icon;
