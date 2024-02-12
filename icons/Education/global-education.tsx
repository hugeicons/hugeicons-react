import * as React from "react";
import type { SVGProps } from "react";

interface GlobalEducationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GlobalEducationIcon = (props: GlobalEducationIconProps) => {
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
        <path d="M4.49843 4.99955C3.19503 4.97763 2.56968 5.23447 2.22294 6.14209C2.01241 6.69319 2 7.29629 2 7.88628V17.9996C2.10783 18.6343 2.28792 19.0554 2.74232 19.3996C3.48302 19.9606 4.46716 20.0373 5.38129 20.2028C7.3857 20.5658 9.12918 21.1806 11.9937 21.9996M19.489 4.99955C20.0658 4.95026 20.4998 4.97684 20.8427 5.13038C22.2148 5.74469 21.9874 7.7616 21.9874 9.26574V16.9996C21.9944 17.5968 21.9559 18.0614 21.8719 18.4318C21.5518 19.8426 19.7432 20.0194 18.3213 20.2817C16.5435 20.6096 14.6465 21.1789 11.9937 21.9996M11.9937 21.9996V14.9996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9929 11.9995C14.7526 11.9995 16.9898 9.76093 16.9898 6.99951C16.9898 4.23809 14.7526 1.99951 11.9929 1.99951M11.9929 11.9995C9.23326 11.9995 6.99609 9.76093 6.99609 6.99951C6.99609 4.23809 9.23326 1.99951 11.9929 1.99951M11.9929 11.9995C13.0969 11.9995 13.9917 9.76093 13.9917 6.99951C13.9917 4.23809 13.0969 1.99951 11.9929 1.99951M11.9929 11.9995C10.889 11.9995 9.99421 9.76093 9.99421 6.99951C9.99421 4.23809 10.889 1.99951 11.9929 1.99951" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GlobalEducationIcon;
