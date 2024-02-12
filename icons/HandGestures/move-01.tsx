import * as React from "react";
import type { SVGProps } from "react";

interface Move01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Move01Icon = (props: Move01IconProps) => {
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
        <path d="M6.84015 22.2486V21.2987C6.84015 20.6524 6.6312 20.0232 6.24427 19.5045L2.58227 14.5951C2.15992 14.0289 1.82259 13.3264 2.10143 12.6779C2.55282 11.6281 3.8263 10.9461 5.38503 12.5201L6.98418 14.2317L6.98418 3.79482C7.04046 1.74896 10.3324 1.64755 10.4732 3.79482V9.74271C11.955 9.55132 18.9354 10.5962 17.918 15.0222C17.8696 15.2325 17.8214 15.4459 17.7743 15.6565C17.5684 16.5764 16.9598 18.2161 16.2887 19.1746C15.59 20.1725 15.8365 21.1664 15.8365 22.2486" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9247 2.6166L17.7293 1.86003C17.8058 1.78809 17.9037 1.7518 18.0017 1.75135M19.1099 2.6166L18.2729 1.85549C18.196 1.78555 18.0987 1.7509 18.0017 1.75135M19.1098 8.85162L18.3053 9.60819C18.2206 9.68776 18.1099 9.72372 18.0017 9.71581M16.9247 8.85162L17.7617 9.61273C17.8304 9.67517 17.9152 9.70949 18.0017 9.71581M18.0017 1.75135V9.71581M21.1354 4.64117L21.8917 5.44604C21.9636 5.52257 21.9999 5.62044 22.0003 5.71851M21.1354 6.82706L21.8962 5.98978C21.9662 5.91284 22.0008 5.81558 22.0003 5.71851M14.9026 6.82704L14.1463 6.02217C14.0667 5.93752 14.0308 5.82676 14.0387 5.71851M14.9026 4.64115L14.1417 5.47844C14.0793 5.54713 14.045 5.63202 14.0387 5.71851M22.0003 5.71851L14.0387 5.71851" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Move01Icon;
