import * as React from "react";
import type { SVGProps } from "react";

interface CheeseCake01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CheeseCake01Icon = (props: CheeseCake01IconProps) => {
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
        <path d="M3.53809 17H11.0501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5625 17H21.0665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5349 5C13.9155 5 15.0347 6.11929 15.0347 7.5C15.0347 8.88071 13.9155 10 12.5349 10C11.1543 10 10.0352 8.88071 10.0352 7.5C10.0352 6.11929 11.1543 5 12.5349 5ZM12.5349 5C12.7016 4.5 13.4348 3.4 15.0347 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0206 8.01509C4.07131 10.2637 1.67194 11.3016 2.03569 12.0463C4.01481 12.9814 7.65062 12.7408 11.3708 12.6012C12.3945 12.5628 13.4052 13.0702 13.6374 14.0776C13.8013 14.7892 13.8446 15.4095 14.168 15.8036C14.3534 16.0296 14.6687 16.1064 14.9501 16.0328C15.7105 15.8338 16.0248 14.9841 16.4001 13.4933C16.4734 13.2022 16.5774 12.8897 16.8586 12.7921C18.1189 12.3547 21.998 13.3194 21.998 11.5424C21.9354 9.69217 21.2618 8.53954 19.0991 6.82526C18.4033 6.27374 17.5245 6.00001 16.6426 6.0708C15.7174 6.14507 15.2864 6.26551 15.0112 6.50339" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.0127 11.9929L2.98803 16.2984C3.48754 18.5524 3.73729 19.6793 4.56 20.3397C5.38272 21.0001 6.53691 21.0001 8.8453 21.0001H17.4227C19.1452 21.0001 20.0064 21.0001 20.5779 20.4821C21.1495 19.9641 21.234 19.107 21.403 17.3927L21.9935 11.6338" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CheeseCake01Icon;
