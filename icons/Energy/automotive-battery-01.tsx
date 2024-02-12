import * as React from "react";
import type { SVGProps } from "react";

interface AutomotiveBattery01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AutomotiveBattery01Icon = (props: AutomotiveBattery01IconProps) => {
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
        <path d="M16 5.5H8C5.17157 5.5 3.75736 5.5 2.87868 6.37868C2 7.25736 2 8.67157 2 11.5V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V11.5C22 8.67157 22 7.25736 21.1213 6.37868C20.2426 5.5 18.8284 5.5 16 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 8.5V12.5M19 10.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5.5V4.75C9 4.04777 9 3.69665 8.83147 3.44443C8.75851 3.33524 8.66476 3.24149 8.55557 3.16853C8.30335 3 7.95223 3 7.25 3C6.54777 3 6.19665 3 5.94443 3.16853C5.83524 3.24149 5.74149 3.33524 5.66853 3.44443C5.5 3.69665 5.5 4.04777 5.5 4.75V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 5.5V4.75C18.5 4.04777 18.5 3.69665 18.3315 3.44443C18.2585 3.33524 18.1648 3.24149 18.0556 3.16853C17.8033 3 17.4522 3 16.75 3C16.0478 3 15.6967 3 15.4444 3.16853C15.3352 3.24149 15.2415 3.33524 15.1685 3.44443C15 3.69665 15 4.04777 15 4.75V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AutomotiveBattery01Icon;
