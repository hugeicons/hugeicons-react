import * as React from "react";
import type { SVGProps } from "react";

interface BabyBottleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BabyBottleIcon = (props: BabyBottleIconProps) => {
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
        <path d="M17 10.5C17 10.5 18 13 18 16.25C18 17.4212 17.8701 18.4949 17.704 19.3894C17.4952 20.5137 17.3908 21.0758 16.835 21.5379C16.2792 22 15.6168 22 14.2919 22H9.70813C8.38323 22 7.72079 22 7.16499 21.5379C6.60919 21.0758 6.50478 20.5137 6.29598 19.3894C6.12986 18.4949 6 17.4212 6 16.25C6 13 7 10.5 7 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.00011 10.511H17.0001C17.148 9.69521 16.9213 8.12225 14.9607 7.50006C14.4954 7.35244 13.95 7.07638 13.7045 6.61185C13.4872 6.20054 13.3855 5.64364 13.7112 5.02551C14.3134 3.88271 13.7323 2.48063 12.4822 2.0873C12.326 2.03813 12.1632 2.00186 12.0001 2.00024C11.826 1.99852 11.6517 2.0348 11.4849 2.0873C10.2348 2.48063 9.65373 3.88271 10.2559 5.02551C10.5816 5.64364 10.4799 6.20054 10.2626 6.61185C10.0247 7.06204 9.50673 7.46181 9.02371 7.61504C7.67057 8.04436 6.73858 9.06792 7.00011 10.511Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 14H17.5M15 18H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BabyBottleIcon;
