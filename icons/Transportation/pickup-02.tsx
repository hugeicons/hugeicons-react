import * as React from "react";
import type { SVGProps } from "react";

interface Pickup02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Pickup02Icon = (props: Pickup02IconProps) => {
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
        <path d="M18.9996 17.5C20.4239 17.5 21.0627 17.5 21.5152 17.0126C21.5346 16.9917 21.5535 16.9702 21.5721 16.9482C22.0019 16.435 22.0019 15.6275 22.0019 14.0125C22.0019 12.7875 22.0019 12.175 21.7616 11.6578C21.5107 11.1178 21.0586 10.7814 20.1078 10.0931C19.1634 9.40947 18.4919 8.64105 17.8521 7.58239C16.9396 6.07263 16.4834 5.31775 15.7992 4.90888C15.1149 4.5 14.3079 4.5 12.6939 4.5H11.9944M8.99219 17.5H14.9967" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9961 4.5L14.7423 7.97979C15.172 9.9834 15.2417 11.5 17.5298 11.5H21.5017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0021 14.5H21.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9951 4.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9986 19.5C18.104 19.5 19.0001 18.6046 19.0001 17.5C19.0001 16.3954 18.104 15.5 16.9986 15.5C15.8932 15.5 14.9971 16.3954 14.9971 17.5C14.9971 18.6046 15.8932 19.5 16.9986 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.99172 19.5C8.09712 19.5 8.99321 18.6046 8.99321 17.5C8.99321 16.3954 8.09712 15.5 6.99172 15.5C5.88633 15.5 4.99023 16.3954 4.99023 17.5C4.99023 18.6046 5.88633 19.5 6.99172 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9896 11.5029H1.99805V16.2136C1.99805 16.5881 2.69055 17.0293 3.31263 17.3231C3.5297 17.4256 3.76782 17.4726 4.00782 17.4793L4.98895 17.5067" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Pickup02Icon;
