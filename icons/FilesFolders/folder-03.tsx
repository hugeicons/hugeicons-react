import * as React from "react";
import type { SVGProps } from "react";

interface Folder03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Folder03Icon = (props: Folder03IconProps) => {
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
        <path d="M2.36064 14.5967C1.98502 12.5252 1.79721 11.4894 2.33084 10.7875C2.36642 10.7407 2.40405 10.6955 2.44361 10.652C3.03686 10 4.08674 10 6.1865 10H17.8135C19.9133 10 20.9631 10 21.5564 10.652C21.5959 10.6955 21.6336 10.7407 21.6692 10.7875C22.2028 11.4894 22.015 12.5252 21.6394 14.5967C21.0993 17.5752 20.8292 19.0644 19.8109 19.9793C19.7414 20.0417 19.6698 20.1016 19.5961 20.159C18.5163 21 17.0068 21 13.9876 21H10.0124C6.99323 21 5.48367 21 4.40387 20.159C4.33022 20.1016 4.2586 20.0417 4.18914 19.9793C3.17075 19.0644 2.90072 17.5752 2.36064 14.5967Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.01981 5.11111H15.8069C17.1159 5.11111 18.7558 4.92325 19.5962 6.14811C20 6.73664 20 8.36146 20 10M12.0132 5.11111L11.2496 3.62394C10.9816 3.10199 10.731 2.47031 10.183 2.18441C9.82959 2 9.40354 2 8.55144 2C6.55097 2 5.55073 2 4.8828 2.54549C3.76565 3.45786 4.02641 5.33047 4.02641 6.60105V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Folder03Icon;
