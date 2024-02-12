import * as React from "react";
import type { SVGProps } from "react";

interface ArtificialIntelligence05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtificialIntelligence05Icon = (props: ArtificialIntelligence05IconProps) => {
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
        <path d="M21.255 7.13358L20.7614 6.27698C20.3881 5.62915 20.2015 5.30524 19.8839 5.17607C19.1739 4.88733 17.9756 5.49724 17.2686 5.69637C16.6419 5.84091 16.1039 5.6388 15.5732 5.33261C15.2141 5.10262 14.9379 4.76352 14.785 4.36493C14.5708 3.72505 14.427 2.59797 13.8603 2.18876C13.599 2 13.2518 2 12.5574 2H11.4426C10.7483 2 10.4011 2 10.1397 2.18876C9.57309 2.59799 9.42928 3.72507 9.21503 4.36493C9.00249 4.91905 8.58201 5.2431 8.08999 5.52698C7.67124 5.74213 7.19009 5.80213 6.73148 5.69637C6.02454 5.49725 4.82615 4.88732 4.11617 5.17607C3.79859 5.30524 3.61195 5.62915 3.23865 6.27698L2.74507 7.13358C2.39516 7.74083 2.2202 8.04446 2.25416 8.36768C2.33849 9.17059 3.50758 10.0501 4.0218 10.625C4.2738 10.944 4.45271 11.5 4.45271 11.9999C4.45271 12.5 4.27386 13.0558 4.02183 13.3749C3.50757 13.9498 2.3385 14.8293 2.25416 15.6323C2.2202 15.9555 2.39516 16.2591 2.74507 16.8663L3.23864 17.7229C3.61193 18.3707 3.79859 18.6947 4.11617 18.8238C4.8261 19.1126 6.02453 18.5026 6.73144 18.3035C7.71336 18.077 8.85351 18.6924 9.215 19.635C9.42926 20.2749 9.57308 21.402 10.1397 21.8113C10.4011 22 10.7483 22 11.4426 22H12.5574C13.2518 22 13.599 22 13.8603 21.8113C14.1217 21.6225 14.2315 21.2925 14.4511 20.6325C14.6985 19.8935 14.8719 19.1165 15.5731 18.6674C16.1038 18.3611 16.6418 18.1589 17.2686 18.3035C17.9755 18.5026 19.1739 19.1126 19.8839 18.8238C20.2015 18.6947 20.3881 18.3707 20.7614 17.7229L21.255 16.8663C21.6049 16.2591 21.7798 15.9555 21.7459 15.6323C21.6614 14.8293 20.4925 13.9499 19.9782 13.3749C19.3955 12.6371 19.3956 11.3628 19.9782 10.625C20.4925 10.05 21.6614 9.17067 21.7459 8.36768C21.7798 8.04446 21.6049 7.74083 21.255 7.13358Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.4375 14.9922L9.27939 9.46653C9.37381 9.18326 9.6389 8.99219 9.9375 8.99219C10.2361 8.99219 10.5012 9.18326 10.5956 9.46653L12.4375 14.9922M8.4375 12.9922H11.4375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4375 8.99219V14.9922" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArtificialIntelligence05Icon;
