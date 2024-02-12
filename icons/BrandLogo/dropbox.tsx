import * as React from "react";
import type { SVGProps } from "react";

interface DropboxIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DropboxIcon = (props: DropboxIconProps) => {
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
        <path d="M12 5.88867L18.1111 9.22201L12 12.5553L5.88889 9.22201L12 5.88867Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33334 15.3335V17.3328C5.33334 18.4804 5.538 18.8381 6.56176 19.3603L11.0062 21.6271C11.9815 22.1245 12.0185 22.1245 12.9938 21.6271L17.4383 19.3603C18.462 18.8381 18.6667 18.4804 18.6667 17.3328V15.3335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5962 3.28932L12 5.63676L9.40376 3.28932C8.48843 2.46171 8.03077 2.04791 7.47093 2.00383C6.91108 1.95975 6.39803 2.29712 5.37192 2.97186L3.51345 4.19395C2.51688 4.84927 2.0186 5.17693 2.0005 5.66379C1.98241 6.15065 2.4549 6.51684 3.3999 7.24921L5.81645 9.12203L3.3999 10.9949C2.45491 11.7272 1.98241 12.0934 2.0005 12.5803C2.0186 13.0671 2.51688 13.3948 3.51345 14.0501L6.36636 15.9261C6.91362 16.286 7.18725 16.4659 7.48583 16.4424C7.78442 16.4189 8.0285 16.1982 8.51667 15.7568L12 12.6073L14.5962 14.9547C15.5116 15.7823 15.9692 16.1962 16.5291 16.2402C17.0889 16.2843 17.602 15.9469 18.6281 15.2722L20.4865 14.0501C21.4831 13.3948 21.9814 13.0671 21.9995 12.5803C22.0176 12.0934 21.5451 11.7272 20.6001 10.9949L18.1836 9.12203L20.6001 7.24921C21.5451 6.51684 22.0176 6.15065 21.9995 5.66379C21.9814 5.17693 21.4831 4.84927 20.4865 4.19395L18.6281 2.97186C17.602 2.29712 17.0889 1.95975 16.5291 2.00383C15.9692 2.04791 15.5116 2.46171 14.5962 3.28932Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DropboxIcon;
