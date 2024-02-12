import * as React from "react";
import type { SVGProps } from "react";

interface WindTurbineIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WindTurbineIcon = (props: WindTurbineIconProps) => {
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
        <path d="M13.5 11C13.5 11.8284 12.8284 12.5 12 12.5C11.1716 12.5 10.5 11.8284 10.5 11C10.5 10.1716 11.1716 9.5 12 9.5C12.8284 9.5 13.5 10.1716 13.5 11Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 10.5C20.9883 10.3076 20.9708 10.1167 20.9476 9.92766C20.6197 7.25804 19.1604 4.94528 17.0722 3.5M6.92775 3.5C4.83963 4.94528 3.38027 7.25804 3.05244 9.92766C3.02923 10.1167 3.01169 10.3076 3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.199 3.99008L10.3507 5.50744C10.4066 6.06576 10.4345 6.34492 10.5703 6.55077C10.6633 6.69171 10.7905 6.8068 10.94 6.88532C11.1584 7 11.4389 7 12 7C12.5611 7 12.8416 7 13.06 6.88532C13.2095 6.8068 13.3367 6.69171 13.4297 6.55077C13.5655 6.34492 13.5934 6.06576 13.6493 5.50744L13.801 3.99007C13.8837 3.16301 13.9251 2.74947 13.7332 2.45461C13.6754 2.36574 13.6038 2.28663 13.5211 2.22024C13.2468 2 12.8312 2 12 2C11.1688 2 10.7532 2 10.4789 2.22024C10.3962 2.28663 10.3246 2.36574 10.2668 2.45461C10.0749 2.74947 10.1163 3.16301 10.199 3.99008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.7002 11.75L8.53516 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.83097 16.0653L8.06918 15.1752C8.52478 14.8477 8.75258 14.6839 8.86293 14.4633C8.93849 14.3123 8.97457 14.1447 8.96782 13.9759C8.95797 13.7295 8.81769 13.4865 8.53714 13.0006C8.25659 12.5147 8.11632 12.2717 7.90782 12.14C7.76508 12.0498 7.60182 11.9972 7.43326 11.9871C7.18707 11.9724 6.93135 12.0878 6.41992 12.3186L5.02997 12.9459C4.27236 13.2878 3.89355 13.4587 3.73412 13.7723C3.68607 13.8668 3.65335 13.9684 3.6372 14.0732C3.58362 14.4209 3.79142 14.7808 4.20701 15.5006C4.62261 16.2204 4.83041 16.5804 5.1583 16.7078C5.25713 16.7462 5.36144 16.7686 5.46732 16.7743C5.8186 16.793 6.15606 16.5504 6.83097 16.0653Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.2998 11.75L15.4648 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.9699 12.9449L17.58 12.3176C17.0685 12.0868 16.8128 11.9714 16.5666 11.9861C16.3981 11.9962 16.2348 12.0488 16.092 12.139C15.8836 12.2707 15.7433 12.5137 15.4627 12.9996C15.1822 13.4856 15.0419 13.7285 15.032 13.975C15.0253 14.1437 15.0614 14.3114 15.1369 14.4624C15.2473 14.6829 15.4751 14.8467 15.9307 15.1742L17.1689 16.0643C17.8438 16.5495 18.1813 16.792 18.5326 16.7733C18.6384 16.7677 18.7427 16.7452 18.8416 16.7068C19.1695 16.5794 19.3773 16.2195 19.7929 15.4996C20.2085 14.7798 20.4163 14.4199 20.3627 14.0722C20.3465 13.9674 20.3138 13.8658 20.2657 13.7713C20.1063 13.4577 19.7275 13.2868 18.9699 12.9449Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 22H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default WindTurbineIcon;
