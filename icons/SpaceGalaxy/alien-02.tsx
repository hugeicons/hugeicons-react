import * as React from "react";
import type { SVGProps } from "react";

interface Alien02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Alien02Icon = (props: Alien02IconProps) => {
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
        <path d="M15.001 9.98933C15.001 11.6436 13.6592 12.9845 12.0039 12.9845C10.3486 12.9845 9.00684 11.6436 9.00684 9.98933C9.00684 8.33514 10.3486 6.99414 12.0039 6.99414C13.6592 6.99414 15.001 8.33514 15.001 9.98933Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9941 16.9775H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.4951 2.00195C20.3286 2.90051 19.4961 4.75753 17.498 4.99715" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.51172 2.00195C3.67823 2.90051 4.51074 4.75753 6.5088 4.99715" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.83984 3.69401C5.58597 5.14247 4.44377 8.62453 4.52056 10.4663C3.39754 10.3895 2.02233 10.5153 2.0012 11.9514C1.98007 13.3875 3.46473 13.6414 4.52056 13.4687V19.8764C4.53825 20.4068 4.58587 21.1007 5.13486 21.3441C6.41145 21.91 7.48648 20.193 8.65453 20.2717C9.5626 20.333 10.877 22.0912 12.0328 21.995C13.3715 21.8835 14.4018 20.2772 15.4255 20.2772C16.6393 20.2772 16.852 21.2779 18.3136 21.4372C19.4038 21.5561 19.5147 20.5165 19.5147 19.957V13.4808C21.404 13.715 22.1527 12.878 21.9722 11.6991C21.7591 10.3079 20.1255 10.4073 19.4754 10.4961C19.5764 9.46164 19.11 8.15601 18.9086 7.64425C18.6118 6.73319 17.3921 4.57959 14.7717 3.51174C12.1513 2.4439 9.7133 3.23358 8.83984 3.69401Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Alien02Icon;
