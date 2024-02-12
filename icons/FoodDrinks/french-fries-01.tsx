import * as React from "react";
import type { SVGProps } from "react";

interface FrenchFries01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FrenchFries01Icon = (props: FrenchFries01IconProps) => {
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
        <path d="M5.56556 10.0231C5.28753 7.82233 5.99024 7.74649 6.33776 8.01772C12.2021 11.484 15.35 11.3103 16.6916 11.7044C17.7649 12.0196 17.4775 12.9477 17.1284 13.3089L11.6585 19.7892C10.7522 20.8629 9.5582 22.585 8.38078 21.8182C7.877 21.4901 7.593 20.7867 7.49814 20.2428C6.94469 17.7501 5.84358 12.2239 5.56556 10.0231Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0212 11.5698L18.4374 7.69071C18.7091 7.02399 18.1051 5.96333 16.0212 6.59973L13.4844 10.5697M15.7919 6.71573V5.32478C15.7919 4.96567 15.7211 4.59487 15.4965 4.31525C15.1464 3.87925 14.5557 3.61522 13.2588 4.77619M13.0887 10.3209V3.22134C12.7556 2.67317 11.8895 1.68111 11.0901 2.09825C10.2906 2.5154 10.3706 3.22134 10.3706 3.54222V4.80162M10.3706 4.80162V6.9917M10.3706 4.80162C9.95363 4.35051 8.74766 3.54222 8.02678 4.17162C7.41581 4.70506 7.678 6.9917 7.678 8.32499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.46674 18.0297C8.85981 18.0297 9.98912 16.8965 9.98912 15.4986C9.98912 14.1007 8.85981 12.9675 7.46674 12.9675C7.03348 12.9675 6.62573 13.0771 6.26953 13.2702" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FrenchFries01Icon;
