import * as React from "react";
import type { SVGProps } from "react";

interface DeliveredSentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliveredSentIcon = (props: DeliveredSentIconProps) => {
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
        <circle cx="17" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 9V13.947C2 16.329 2 17.52 2.73223 18.26C3.2191 18.752 3.90328 18.9169 5 18.9722M12.4271 5C13.3404 5.2999 14.0564 6.02354 14.3532 6.94653C14.5 7.40322 14.5 7.96752 14.5 9.09613C14.5 9.84853 14.5 10.2247 14.5979 10.5292C14.7957 11.1445 15.2731 11.6269 15.882 11.8269C16.1832 11.9258 16.5555 11.9258 17.3 11.9258H22V13.947C22 16.329 22 17.52 21.2678 18.26C20.7809 18.752 20.0967 18.9169 19 18.9722M9 19H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 7H16.3212C17.7766 7 18.5042 7 19.0964 7.35371C19.6886 7.70742 20.0336 8.34811 20.7236 9.6295L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.32653 8L8.81309 6.82582C9.60436 6.20083 10 5.88833 10 5.5M7.32653 3L8.81309 4.17417C9.60436 4.79917 10 5.11168 10 5.5M10 5.5L2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DeliveredSentIcon;
