import * as React from "react";
import type { SVGProps } from "react";

interface Sushi01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sushi01Icon = (props: Sushi01IconProps) => {
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
        <path d="M20 13C20 16.0024 20 17.5036 19.1213 18.4363C17.0344 20.6515 6.71606 20.3867 4.87868 18.4363C4 17.5036 4 16.0024 4 13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.04 4C4.4529 4 2.47653 8.7964 2.03855 12.6325C1.851 14.2752 2.33921 14.2488 3.69248 13.5405C5.76039 12.458 8.50919 11.766 12.04 11.766C15.5657 11.766 18.2639 12.456 20.3076 13.5357C21.6586 14.2494 22.1436 14.2742 21.9641 12.6322C21.5448 8.7961 19.6269 4 12.04 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.99609 12C6.99609 9.47222 7.8828 4.56415 12.9961 4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 12C15 10.0614 15.5118 6.73584 18 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Sushi01Icon;
