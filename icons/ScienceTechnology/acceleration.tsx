import * as React from "react";
import type { SVGProps } from "react";

interface AccelerationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AccelerationIcon = (props: AccelerationIconProps) => {
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
        <path d="M2.49805 18.4138V11.1909C2.49805 9.86228 2.49805 9.19798 3.09674 9.03265C3.69542 8.86733 4.40002 9.33706 5.80922 10.2765L18.5832 18.7926C19.9924 19.732 20.697 20.2018 20.449 20.6009C20.201 21 19.2046 21 17.2117 21H6.37733C4.54862 21 3.63426 21 3.06616 20.6213C2.49805 20.2425 2.49805 19.633 2.49805 18.4138Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.49805 11C10.7072 11 12.498 9.20914 12.498 7C12.498 4.79086 10.7072 3 8.49805 3C6.28891 3 4.49805 4.79086 4.49805 7C4.49805 9.20914 6.28891 11 8.49805 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.502 9.99609L21.4055 13.3801M21.4055 13.3801C21.7255 13.0406 21.1848 12.0601 20.7283 10.7281M21.4055 13.3801C21.1848 13.6201 20.4639 13.6801 18.7639 13.9981" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AccelerationIcon;
