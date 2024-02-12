import * as React from "react";
import type { SVGProps } from "react";

interface WorkoutGymnasticsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkoutGymnasticsIcon = (props: WorkoutGymnasticsIconProps) => {
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
        <path d="M6.99633 9.50142C6.99633 10.3273 6.32513 10.9969 5.49716 10.9969C4.66918 10.9969 3.99799 10.3273 3.99799 9.50142C3.99799 8.67551 4.66918 8.00598 5.49716 8.00598C6.32513 8.00598 6.99633 8.67551 6.99633 9.50142Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.96601 3.00049L9.82455 8.77188C9.85337 8.96567 9.86785 9.16131 9.86785 9.35722V9.43799C9.86785 9.64711 9.84586 9.85565 9.80225 10.0602L9.75243 10.2938C9.7354 10.3737 9.70859 10.4512 9.6726 10.5246L6.99213 15.9895M10.4244 8.75483L15.9424 11.0595L16.5009 11.3019C16.839 11.4486 17.0969 11.7343 17.2078 12.0851L20.0021 20.9995M9.50955 11.9602L14.6344 13.9713M14.6344 13.9713L12.0186 20.8737M14.6344 13.9713L16.8166 11.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkoutGymnasticsIcon;
