import * as React from "react";
import type { SVGProps } from "react";

interface TShirtIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TShirtIcon = (props: TShirtIconProps) => {
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
        <path d="M5.99756 12V17.6841C5.99756 19.4952 5.99756 20.4008 6.58285 20.9635C7.24789 21.6028 9.6154 21.9785 11.9925 21.9991C14.3085 22.0192 16.6337 21.7022 17.4021 20.9635C17.9874 20.4008 17.9874 19.4952 17.9874 17.6841V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.72228 14.0221C4.8566 13.7084 3.22971 13.4395 2.49588 12.7033C1.48592 11.69 2.13864 10.3202 3.37707 7.73893C3.93449 6.57712 5.00094 5.72245 6.24362 5.38454C6.41238 5.33865 6.55884 5.23315 6.65592 5.08757L7.93933 3.08868C7.97639 3.0331 8.02343 2.98535 8.08061 2.95086C8.65909 2.60196 10.0921 2 11.9925 2C13.8929 2 15.2321 2.60196 15.8105 2.95086C15.8677 2.98535 15.9148 3.0331 15.9518 3.08868L17.2721 5.06872C17.3692 5.21431 17.5156 5.3198 17.6844 5.36569C18.9271 5.7036 19.9451 6.45014 20.5026 7.61195C21.8937 10.1413 22.5105 11.6707 21.5005 12.684C20.7667 13.4202 19.1174 13.7116 18.2517 14.0253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.50098 5.5L10.7345 8.79263C11.3409 9.26421 11.644 9.5 12.001 9.5C12.358 9.5 12.6611 9.26421 13.2675 8.79263L17.501 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.50098 3L11.001 9M14.501 3L13.001 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TShirtIcon;
