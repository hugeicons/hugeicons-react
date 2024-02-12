import * as React from "react";
import type { SVGProps } from "react";

interface PointingLeft06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingLeft06Icon = (props: PointingLeft06IconProps) => {
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
        <path d="M2 4.5H7.99817M2 4.5C2 3.79977 3.99369 2.49153 4.49924 2M2 4.5C2 5.20023 3.99369 6.50847 4.49924 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.0747 13.0054H7.97211M7.97211 13.0054H3.5041C2.67341 13.0054 2 12.333 2 11.5036C2 10.6742 2.67341 10.0018 3.5041 10.0018L8.96687 10.0018M7.97211 13.0054L7.99896 14.0598C8.01707 14.7708 8.40523 15.3874 8.97664 15.7277M8.96687 10.0018L13.5284 10.0018M8.96687 10.0018L11.7258 7.4084C13.5928 5.83594 14.9538 6.66226 15.71 7.24251L19.6826 10.1229C20.0239 10.3703 20.4346 10.5036 20.8561 10.5036H21.9888M11.0052 16.0089H10.0014C9.62732 16.0089 9.27671 15.9064 8.97664 15.7277M8.97664 15.7277L9.03132 17.0633C9.04849 17.7375 9.39841 18.3268 9.92178 18.6762M12.0375 19.0125H11.0338C10.6228 19.0125 10.2402 18.8887 9.92178 18.6762M9.92178 18.6762L10.1907 20.2671C10.3256 21.2664 11.1845 22.0091 12.1943 21.9997H15.7425C16.3463 21.9997 16.9527 21.9512 17.5262 21.7625C18.0038 21.6054 18.5297 21.3851 18.8731 21.1152C19.6139 20.5329 19.8765 20.1259 20.5115 20.02C21.0195 19.9353 21.6567 19.9234 22.0006 19.9234" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingLeft06Icon;
