import * as React from "react";
import type { SVGProps } from "react";

interface AddressBookIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AddressBookIcon = (props: AddressBookIconProps) => {
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
        <path d="M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.25 10.0002V12.5002C15.25 13.3286 15.9216 14.0002 16.75 14.0002C17.5784 14.0002 18.25 13.3286 18.25 12.5002V12C18.25 9.23858 16.0114 7 13.25 7C10.4886 7 8.25 9.23858 8.25 12C8.25 14.7614 10.4886 17 13.25 17C14.3758 17 15.4147 16.6279 16.2505 16M15.25 12.0002C15.25 13.1048 14.3546 14.0002 13.25 14.0002C12.1454 14.0002 11.25 13.1048 11.25 12.0002C11.25 10.8956 12.1454 10.0002 13.25 10.0002C14.3546 10.0002 15.25 10.8956 15.25 12.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5 6L2 6M4.5 12L2 12M4.5 18H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AddressBookIcon;
