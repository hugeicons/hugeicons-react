import * as React from "react";
import type { SVGProps } from "react";

interface FireSecurityIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FireSecurityIcon = (props: FireSecurityIconProps) => {
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
        <path d="M10.945 22C6.55709 22 2.99998 18.4183 2.99998 14C2.99998 11.9162 3.95827 9.83244 5.20922 8C5.46594 9.5 6.57524 12.4 8.95876 12C6.33496 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5354 16.202C15.5354 15.5075 15.4277 14.5456 15.8359 13.9204C16.7377 12.5395 18.6013 12.7797 19.2625 14.1006C19.5631 14.761 19.4516 15.5377 19.4669 16.1928M15.5354 16.202C14.6863 16.2899 14.3202 16.8419 14.1768 17.2827C14.0325 17.8231 13.9123 19.144 14.1046 20.5849C14.2729 21.4855 14.9066 21.9036 15.4724 21.9539C16.0134 22.0019 18.2978 21.9899 18.9591 21.9899C19.9839 21.9899 20.5851 21.7257 20.8857 20.645C21.0299 19.8044 21.066 18.2433 20.8255 17.2827C20.5597 16.481 19.9245 16.248 19.4669 16.1928M15.5354 16.202C16.8165 16.0693 18.1849 16.0383 19.4669 16.1928" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FireSecurityIcon;
