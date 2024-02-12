import * as React from "react";
import type { SVGProps } from "react";

interface LicenseDraftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicenseDraftIcon = (props: LicenseDraftIconProps) => {
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
        <path d="M20.002 11V10C20.002 6.22876 20.002 4.34315 18.7615 3.17157C17.521 2 15.5245 2 11.5314 2H10.4726C6.47947 2 4.48293 2 3.24244 3.17157C2.00195 4.34315 2.00195 6.22876 2.00195 10V14C2.00195 17.7712 2.00195 19.6569 3.24244 20.8284C4.48293 22 6.47946 22 10.4726 22H11.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.00195 7H15.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.00195 12H15.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.8624 14.4393L21.5567 15.1317C22.1441 15.7175 22.1441 16.6672 21.5567 17.253L17.9192 20.9487C17.6331 21.234 17.2671 21.4264 16.8693 21.5005L14.6149 21.9885C14.259 22.0656 13.942 21.7504 14.0183 21.3952L14.4981 19.1599C14.5724 18.7632 14.7653 18.3982 15.0515 18.1129L18.7352 14.4393C19.3226 13.8536 20.275 13.8536 20.8624 14.4393Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LicenseDraftIcon;
