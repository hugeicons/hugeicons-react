import * as React from "react";
import type { SVGProps } from "react";

interface ThreeDMoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeDMoveIcon = (props: ThreeDMoveIconProps) => {
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
        <path d="M12 14L17.5 18.5M12 14L6.5 18.5M12 14V7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.3914 3.69046C11.1054 2.56349 11.4624 2 12 2C12.5376 2 12.8946 2.56349 13.6086 3.69046L14.1215 4.49995C14.8259 5.6118 15.1781 6.16772 14.9104 6.58386C14.6426 7 13.9327 7 12.5129 7H11.4871C10.0673 7 9.35739 7 9.08963 6.58386C8.82188 6.16772 9.17409 5.6118 9.87852 4.49995L10.3914 3.69046Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.2324 19.1408C21.8559 20.3502 22.1676 20.9548 21.9085 21.4249C21.6494 21.8949 20.9936 21.9144 19.6819 21.9536L18.7398 21.9817C17.4457 22.0203 16.7987 22.0396 16.5705 21.5895C16.3422 21.1393 16.6843 20.5186 17.3686 19.2773L17.8629 18.3805C18.5471 17.1391 18.8893 16.5184 19.3756 16.5004C19.8619 16.4824 20.1694 17.0789 20.7846 18.2721L21.2324 19.1408Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.76761 19.1408C2.14414 20.3502 1.8324 20.9548 2.09148 21.4249C2.35055 21.8949 3.00639 21.9144 4.31805 21.9536L5.26021 21.9817C6.55427 22.0203 7.20131 22.0396 7.42955 21.5895C7.65779 21.1393 7.31567 20.5186 6.63143 19.2773L6.13711 18.3805C5.45286 17.1391 5.11074 16.5184 4.62443 16.5004C4.13811 16.4824 3.83055 17.0789 3.21545 18.2721L2.76761 19.1408Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ThreeDMoveIcon;
