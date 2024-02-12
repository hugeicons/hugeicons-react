import * as React from "react";
import type { SVGProps } from "react";

interface PeerToPeer02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PeerToPeer02Icon = (props: PeerToPeer02IconProps) => {
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
        <path d="M5.52001 3C4.69617 3 4.02832 3.67178 4.02832 4.50048C4.02832 5.32917 4.69617 6.00096 5.52001 6.00096C6.34385 6.00096 7.0117 5.32917 7.0117 4.50048C7.0117 3.67178 6.34385 3 5.52001 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4821 21.0002H16.7038C16.4972 21.0002 16.2898 20.97 16.1001 20.8852C15.4826 20.6091 15.1693 20.2445 15.0233 20.0165C14.9402 19.8867 14.9521 19.7214 15.0422 19.5969C15.7576 18.6081 17.4164 18.0108 18.4821 18.0107M18.4852 21.0002H20.2635C20.4701 21.0002 20.6775 20.97 20.8672 20.8852C21.4847 20.6091 21.798 20.2445 21.944 20.0165C22.0271 19.8867 22.0153 19.7214 21.9251 19.5969C21.2097 18.6081 19.5509 18.0108 18.4852 18.0107" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.51485 11.4924H3.73649C3.52995 11.4924 3.32254 11.4621 3.13284 11.3773C2.51533 11.1013 2.20203 10.7367 2.05602 10.5087C1.97294 10.3789 1.98477 10.2136 2.07491 10.089C2.79035 9.10024 4.44914 8.50298 5.51485 8.50293M5.51789 11.4924H7.29625C7.50279 11.4924 7.7102 11.4621 7.8999 11.3773C8.51741 11.1013 8.83071 10.7367 8.97672 10.5087C9.0598 10.3789 9.04797 10.2136 8.95783 10.089C8.24239 9.10024 6.5836 8.50298 5.51789 8.50293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4868 4C14.2995 4 16.7004 4 17.5742 4.87896C18.448 5.75792 18.448 6.67242 18.448 9.50175L16.4591 8.50143" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9842 20.0057C9.1714 20.0057 6.77057 20.0057 5.89676 19.1267C5.02295 18.2477 5.02295 17.3332 5.02295 14.5039L7.01187 15.5042" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4477 12.5029C17.6239 12.5029 16.9561 13.1747 16.9561 14.0034C16.9561 14.8321 17.6239 15.5039 18.4477 15.5039C19.2716 15.5039 19.9394 14.8321 19.9394 14.0034C19.9394 13.1747 19.2716 12.5029 18.4477 12.5029Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PeerToPeer02Icon;
