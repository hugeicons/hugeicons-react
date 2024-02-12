import * as React from "react";
import type { SVGProps } from "react";

interface AlarmClockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlarmClockIcon = (props: AlarmClockIconProps) => {
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
        <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 19L3 21M19 19L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3.5697L19.5955 3.27195C20.4408 2.84932 20.7583 2.89769 21.4303 3.5697C22.1023 4.2417 22.1507 4.55924 21.728 5.4045L21.4303 6M5 3.5697L4.4045 3.27195C3.55924 2.84932 3.2417 2.89769 2.5697 3.5697C1.89769 4.2417 1.84932 4.55924 2.27195 5.4045L2.5697 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9.5V13.5L14 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlarmClockIcon;
