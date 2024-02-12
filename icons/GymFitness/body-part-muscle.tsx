import * as React from "react";
import type { SVGProps } from "react";

interface BodyPartMuscleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BodyPartMuscleIcon = (props: BodyPartMuscleIconProps) => {
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
        <path d="M2.01743 20.3048C3.14608 21.9194 8.05893 23.1868 10.3792 20.1642C12.8889 21.3647 17.0284 20.9925 20.3986 19.1132C20.8674 18.8518 21.3107 18.522 21.5822 18.0591C22.1952 17.014 22.2098 15.5642 21.0915 13.4249C19.2269 8.77048 15.8735 4.68488 14.5196 3.04188C14.2416 2.78841 12.4682 2.42843 11.3867 2.08254C10.909 1.93452 10.0195 1.8364 8.95564 3.23838C8.45127 3.90305 6.1601 5.53546 9.06718 6.63322C9.51756 6.74782 9.84863 6.95914 11.9033 6.5838C12.1709 6.53736 12.839 6.5838 13.3098 7.41016L14.2931 8.81637C14.3846 8.94728 14.444 9.09789 14.4622 9.25658C14.6345 10.7555 14.6289 12.6321 15.4646 13.5823C14.1739 12.6489 10.8006 11.5403 8.25901 14.6948M2.0014 12.9398C3.20961 11.7907 6.71148 9.97568 10.4174 12.5213" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BodyPartMuscleIcon;
