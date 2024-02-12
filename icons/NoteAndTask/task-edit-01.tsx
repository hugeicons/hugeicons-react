import * as React from "react";
import type { SVGProps } from "react";

interface TaskEdit01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TaskEdit01Icon = (props: TaskEdit01IconProps) => {
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
        <path d="M6.51318 16H10.5132M6.51318 11H14.5132" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0132 22H11.0132" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5098 22C6.36057 21.975 5.58609 22 4.58675 21.775C3.53745 21.5 2.88789 20.85 2.66305 19.55C2.43819 18.7 2.51048 14.9238 2.51314 11.325C2.51521 8.53219 2.53373 5.99934 2.76297 5.475C3.08777 4.35 3.83727 3.55 6.16072 3.525M16.0291 3.525C16.8286 3.6 18.9183 3.525 19.3269 5.825C19.549 7.075 19.5018 8.85 19.5018 10.975M8.18437 5.5C9.23367 5.525 12.6064 5.5 13.7556 5.5C14.9049 5.5 15.5122 4.55409 15.5045 3.675C15.4966 2.77925 14.705 2.08017 13.9305 2C12.9812 2 8.95885 2 8.15938 2C7.235 2.05 6.61042 2.8 6.51048 3.55C6.41055 4.575 7.16005 5.45 8.18437 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.2775 14.3752C16.9034 15.7752 14.2552 18.2752 14.2552 18.4502C14.0416 18.747 13.8554 19.3502 13.7305 20.2002C13.5736 20.9881 13.3857 21.6752 13.6056 21.8752C13.8255 22.0752 14.6534 21.9066 15.5293 21.7252C16.2288 21.6502 16.8784 21.4002 17.2032 21.1502C17.6779 20.73 20.9007 17.4752 21.2755 17.0502C21.5503 16.6752 21.5753 15.9752 21.3354 15.5502C21.2005 15.2502 20.3511 14.4502 20.0763 14.2252C19.5766 13.9252 18.8771 13.8752 18.2775 14.3752Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TaskEdit01Icon;
