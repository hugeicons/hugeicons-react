import * as React from "react";
import type { SVGProps } from "react";

interface ExpanderIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ExpanderIcon = (props: ExpanderIconProps) => {
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
        <path d="M11.3385 16.4964C11.5956 16.2804 11.8899 16.1109 12.2026 16.0068C14.2265 15.3718 13.1034 13.8536 14.939 13.2548C16.3555 12.7927 15.9211 12.0132 16.4727 11.3551M10.0549 13.9257C10.2528 13.7688 10.4892 13.6574 10.7499 13.6054C11.8236 13.4006 11.6605 11.7591 12.8007 11.54C13.5852 11.3812 13.4976 10.5859 13.9056 10.0698M7.48786 12.6405C7.59257 12.2145 8.03917 12.2549 8.352 12.1508C10.2956 11.4355 9.17253 9.74847 11.0883 9.39884C12.5419 9.18614 11.9803 8.06148 12.6221 7.49915" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.00007 15.3338L8.65838 22.0013M2.83732 15.7945L3.51567 15.1582C3.93002 14.7695 4.36865 14.3251 4.93495 14.2845C5.45684 14.2472 6.16409 14.5257 8.10633 15.2098C8.75086 15.4368 9.54869 17.4663 9.66816 18.8082C9.7258 19.4555 9.3379 20.0078 8.88755 20.4764L8.34281 21.0432" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3417 2.00374L21.967 8.70416M15.7976 2.84442L15.1588 3.52055C14.7686 3.93354 14.3227 4.37057 14.2794 4.93744C14.2395 5.45986 14.5141 6.16946 15.1876 8.11774C15.411 8.76394 17.4318 9.5724 18.7712 9.69932C19.4188 9.76068 19.9731 9.37452 20.4437 8.92547L21.0118 8.38341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ExpanderIcon;
