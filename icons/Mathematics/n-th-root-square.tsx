import * as React from "react";
import type { SVGProps } from "react";

interface NThRootSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NThRootSquareIcon = (props: NThRootSquareIconProps) => {
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
        <path d="M7 10.519V8.55357M7 8.55357C7.06134 7.73058 7.67624 7 8.51042 7C9.49429 7 9.93903 7.93135 10.006 8.55357V10.519M7 8.55357V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.99023 14.5142C7.45398 14.2592 7.86023 14.1672 8.061 14.3402C8.26177 14.5132 8.68914 15.3056 8.86408 15.6118C9.13177 16.0802 9.43963 17.0172 9.97501 17.0172C10.3364 17.0172 10.6267 16.0387 11.0993 14.8756C11.8192 13.1041 12.6244 10.8615 12.7456 10.6595C12.9464 10.3248 13.1472 9.99023 13.6825 9.99023C14.2849 9.99023 17.0287 9.99023 17.0287 9.99023" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NThRootSquareIcon;
