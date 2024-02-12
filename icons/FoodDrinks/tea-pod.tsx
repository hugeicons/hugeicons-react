import * as React from "react";
import type { SVGProps } from "react";

interface TeaPodIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TeaPodIcon = (props: TeaPodIconProps) => {
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
        <path d="M19.0066 10.005V6.5038C19.0066 4.01763 16.9837 2.0022 14.4884 2.0022C11.9931 2.0022 9.97021 4.01763 9.97021 6.5038V10.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.4883 9.00468V7.50415" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.16983 11.1284L6.65262 16.9028C6.69107 16.9524 6.713 17.0126 6.71536 17.0752L6.80516 19.4595C6.83637 20.2883 7.41257 20.9973 8.21978 21.2001L8.46733 21.2623C12.449 22.2627 16.62 22.2419 20.5914 21.2019C21.3688 20.9983 21.9167 20.306 21.934 19.5053L21.9944 16.7138C22.0799 12.7813 20.8067 11.9341 20.1838 11.3631C18.7424 10.0415 16.5971 9.7237 14.5372 9.7237C10.9647 9.7237 9.24485 10.7393 8.4464 11.4299C8.27109 11.5816 8.01814 11.6179 7.81832 11.5002L3.84401 9.15815C3.49843 8.9545 3.05501 9.03637 2.80562 9.34987L2.1757 10.1417C1.94625 10.4301 1.94382 10.8373 2.16983 11.1284Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TeaPodIcon;
