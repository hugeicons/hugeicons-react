import * as React from "react";
import type { SVGProps } from "react";

interface FourFinger03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FourFinger03Icon = (props: FourFinger03IconProps) => {
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
        <path d="M7.89205 9.35633L5.4741 11.9588C5.15171 12.2907 4.57635 13.1569 4.50692 13.9503C4.4339 14.7846 5.18562 15.9814 5.4741 16.4396C6.22604 17.6339 6.52881 18.2966 7.40846 19.4268C7.88617 20.0406 9.17658 21.2641 11.2772 21.4183C12.8453 21.5334 14.4062 21.5227 15.1459 21.4183C15.6538 21.3466 16.8868 21.1196 18.0474 19.9247C19.2081 18.7298 19.4982 16.7715 19.4982 15.9418V7.97584C19.4982 7.47797 19.2081 6.48223 18.0474 6.48223C16.8868 6.48223 16.5967 7.47797 16.5967 7.97584V11.4609M7.89205 13.9503V5.98436C7.89205 5.48649 8.1822 4.49075 9.34282 4.49075C10.5034 4.49075 10.7936 5.48649 10.7936 5.98436M10.7936 5.98436V10.4652M10.7936 5.98436V3.99288C10.7936 3.49501 11.0837 2.49927 12.2444 2.49927C13.405 2.49927 13.6951 3.49501 13.6951 3.99288V5.98436M13.6951 5.98436V10.4652M13.6951 5.98436C13.6951 5.48649 13.9853 4.49075 15.1459 4.49075C16.3065 4.49075 16.5967 5.48649 16.5967 5.98436V8.47371" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FourFinger03Icon;
