import * as React from "react";
import type { SVGProps } from "react";

interface FolderTransferIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderTransferIcon = (props: FolderTransferIconProps) => {
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
        <path d="M7 11H7.625C9.38057 11 10.2584 11 10.8889 10.5787C11.1619 10.3963 11.3963 10.1619 11.5787 9.88893C12 9.25837 12 8.38058 12 6.625C12 5.57165 12 5.04498 11.7472 4.66664C11.6378 4.50286 11.4971 4.36223 11.3334 4.2528C10.955 4 10.4283 4 9.375 4H7.71393C7.56953 4 7.49733 4 7.43101 3.99026C7.18274 3.95381 6.96074 3.81737 6.81761 3.61327C6.77937 3.55875 6.74734 3.49469 6.68328 3.36656C6.42089 2.84179 6.18111 2.31356 5.59963 2.0955C5.34495 2 5.05401 2 4.47214 2C3.5639 2 3.10978 2 2.76903 2.19016C2.52613 2.32571 2.32571 2.52613 2.19016 2.76903C2 3.10978 2 3.5639 2 4.47214V6C2 8.35702 2 9.53553 2.73223 10.2678C3.46447 11 4.64298 11 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 22H16.375C14.6194 22 13.7416 22 13.1111 21.5787C12.8381 21.3963 12.6037 21.1619 12.4213 20.8889C12 20.2584 12 19.3806 12 17.625C12 16.5717 12 16.045 12.2528 15.6666C12.3622 15.5029 12.5029 15.3622 12.6666 15.2528C13.045 15 13.5717 15 14.625 15H16.2861C16.4305 15 16.5027 15 16.569 14.9903C16.8173 14.9538 17.0393 14.8174 17.1824 14.6133C17.2206 14.5587 17.2527 14.4947 17.3167 14.3666C17.5791 13.8418 17.8189 13.3136 18.4004 13.0955C18.6551 13 18.946 13 19.5279 13C20.4361 13 20.8902 13 21.231 13.1902C21.4739 13.3257 21.6743 13.5261 21.8098 13.769C22 14.1098 22 14.5639 22 15.4721V17C22 19.357 22 20.5355 21.2678 21.2678C20.5355 22 19.357 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.3358 9H22C21.5 5 19 2.5 16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.66416 15L2 15C2.5 19 5 21.5 8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderTransferIcon;
