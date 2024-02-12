import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft02Icon = (props: RotateLeft02IconProps) => {
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
        <path d="M13.6399 8.72783L14.1368 11.351L6.02167 6.72193C5.21723 6.26306 4.1886 6.53537 3.72415 7.33015C3.25971 8.12494 3.53533 9.14123 4.33977 9.6001L8.70947 12.0927L7.67116 14.7764C6.98516 16.4998 6.64216 17.3614 6.65445 18.1132C6.67474 19.355 7.1243 20.5026 8.35082 21.2022C9.20511 21.6896 9.90014 21.8079 11.7364 22.1791C12.9015 22.4147 13.4841 22.5325 14.0242 22.4907C14.9133 22.4219 15.7506 22.0498 16.3926 21.4382C16.7825 21.0667 17.0798 20.5579 17.6745 19.5403L18.1786 18.6777C18.9691 17.3248 19.3644 16.6484 19.4651 15.9029C19.4831 15.7692 19.494 15.6346 19.4975 15.4998C19.5174 14.7479 19.2353 14.0183 18.6711 12.5589L16.8445 7.83464C16.5638 7.10866 15.8089 6.67423 15.0313 6.79124C14.0966 6.93188 13.4659 7.8097 13.6399 8.72783Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.86336 4.46514C9.26026 4.86079 10.9869 4.74664 11.6238 4.6672M8.86336 4.46514C8.46647 4.0695 8.45511 2.13746 8.5348 1.50257M8.86336 4.46514C9.88443 2.69691 13.944 -0.123637 17.9724 2.69691C19.919 4.05991 20.1937 4.91887 20.5016 5.4943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft02Icon;
