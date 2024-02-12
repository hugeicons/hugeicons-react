import * as React from "react";
import type { SVGProps } from "react";

interface VictoryFinger01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VictoryFinger01Icon = (props: VictoryFinger01IconProps) => {
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
        <path d="M8.51757 13.0007L7.96488 10.0432M7.96488 10.0432L6.84967 4.07572C6.67352 3.13311 7.2856 2.22346 8.224 2.03325C9.17357 1.84078 10.0988 2.45694 10.289 3.40846L11.5029 9.48123L12.723 3.40846C12.9132 2.45694 13.8384 1.84078 14.788 2.03325C15.7264 2.22346 16.2706 3.13795 16.0944 4.08057L15.0682 9.82971M7.96488 10.0432C6.07249 11.8178 4.91164 12.8595 4.67388 13.7962C4.40895 14.84 4.18954 15.9851 6.07829 18.2819C6.7 19.0379 7.22411 19.5625 7.3454 19.7626C7.55658 20.111 8.0038 20.3723 8.0038 22.0023M15.0841 9.84861C17.3457 10.4912 18.817 11.7103 19.2384 12.5798C19.7079 13.5487 19.5752 15.0057 18.5904 17.4059C18.2019 18.3528 17.7258 18.8915 17.6473 19.112C17.4643 19.6257 17.1853 20.1789 17.3136 21.9783" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VictoryFinger01Icon;
