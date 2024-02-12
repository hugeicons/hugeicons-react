import * as React from "react";
import type { SVGProps } from "react";

interface WorkoutBattleRopesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkoutBattleRopesIcon = (props: WorkoutBattleRopesIconProps) => {
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
        <path d="M8.99436 4.49756C8.99436 5.32599 8.32239 5.99756 7.49349 5.99756C6.66458 5.99756 5.99261 5.32599 5.99261 4.49756C5.99261 3.66913 6.66458 2.99756 7.49349 2.99756C8.32239 2.99756 8.99436 3.66913 8.99436 4.49756Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.0004 8.99756C19.4166 8.99756 18.8667 8.72701 18.5164 8.2673L17.489 6.91916C17.3529 6.74053 17.2848 6.65122 17.2186 6.581C16.6489 5.97722 15.7389 5.82381 14.9975 6.20657" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.0014 16.9976C19.7153 16.9976 18.4907 16.445 17.6362 15.4792L16.9576 14.7121C15.9758 13.6023 14.6693 12.855 13.2447 12.5635M10.8686 12.4266C10.5585 12.4266 10.4035 12.4266 10.2598 12.4057C9.01961 12.2259 8.31409 10.8076 7.49359 9.99756" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.9985 6.9751L9.90415 8.38642L7.84358 8.25655M6.35849 21.0024V16.3641L6.17286 16.0302L5.18898 15.1211M5.18898 15.1211L3.37562 13.6774C3.13731 13.4877 2.99847 13.1997 2.99847 12.8951V12.8762L4.61351 8.57195L4.68982 8.46795C4.89608 8.18685 5.23385 8.03348 5.58123 8.06317L7.84358 8.25655M5.18898 15.1211L7.84358 8.25655" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkoutBattleRopesIcon;
