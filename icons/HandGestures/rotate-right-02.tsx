import * as React from "react";
import type { SVGProps } from "react";

interface RotateRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateRight02Icon = (props: RotateRight02IconProps) => {
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
        <path d="M10.3601 8.72832L9.86318 11.3515L17.9784 6.72242C18.7828 6.26355 19.8114 6.53586 20.2759 7.33064C20.7403 8.12543 20.4647 9.14172 19.6603 9.60059L15.2906 12.0932L16.3289 14.7769C17.0149 16.5003 17.3579 17.3619 17.3456 18.1137C17.3253 19.3555 16.8757 20.5031 15.6492 21.2027C14.7949 21.6901 14.0999 21.8084 12.2636 22.1796C11.0985 22.4152 10.5159 22.533 9.97581 22.4912C9.08668 22.4224 8.24941 22.0503 7.6074 21.4387C7.21745 21.0672 6.92013 20.5584 6.32548 19.5408L5.82141 18.6782C5.03084 17.3253 4.63555 16.6489 4.5349 15.9034C4.51685 15.7697 4.50602 15.6351 4.50245 15.5003C4.48258 14.7484 4.76469 14.0188 5.3289 12.5594L7.15544 7.83513C7.43612 7.10915 8.1911 6.67472 8.96871 6.79173C9.90335 6.93237 10.5341 7.81019 10.3601 8.72832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.1366 4.46563C14.7397 4.86127 13.0131 4.74713 12.3762 4.66769M15.1366 4.46563C15.5335 4.06999 15.5449 2.13795 15.4652 1.50306M15.1366 4.46563C14.1156 2.6974 10.056 -0.123149 6.02763 2.6974C4.08097 4.0604 3.80628 4.91935 3.49844 5.49478" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateRight02Icon;
