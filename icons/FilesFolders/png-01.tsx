import * as React from "react";
import type { SVGProps } from "react";

interface Png01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Png01Icon = (props: Png01IconProps) => {
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
        <path d="M3.5 13.0096V12.2051C3.5 9.23457 3.5 7.74931 3.96894 6.56307C4.72281 4.65603 6.31714 3.15178 8.33836 2.44049C9.59563 1.99805 11.1698 1.99805 14.3182 1.99805C16.1173 1.99805 17.0168 1.99805 17.7352 2.25087C18.8902 2.65732 19.8012 3.5169 20.232 4.60664C20.5 5.28448 20.5 6.1332 20.5 7.83063V12.0228V13.0096" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12.0086C3.5 10.1658 4.99238 8.67175 6.83333 8.67175C7.49912 8.67175 8.28404 8.78854 8.93137 8.6149C9.50652 8.46062 9.95576 8.01091 10.1099 7.43514C10.2833 6.78714 10.1667 6.00139 10.1667 5.33489C10.1667 3.492 11.6591 1.99805 13.5 1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 21.9956V16.0304H5.48718C6.21978 16.0304 6.87128 16.5556 6.89718 17.2836C6.90288 17.4417 6.90268 17.596 6.89698 17.7516C6.87008 18.483 6.21518 19.013 5.47898 19.013H4.25638M20.4985 17.0246C20.4589 16.2155 19.9966 16.011 18.4985 16.0304H17.7338C17.1814 16.0304 16.7338 16.4755 16.7338 17.0246V21.0014C16.7338 21.5505 17.1814 21.9956 17.7338 21.9956H19.9985C20.2746 21.9956 20.4985 21.7731 20.4985 21.4985V20.0072C20.4985 19.7327 20.2746 19.5101 19.9985 19.5101H18.9985M9.74681 22.0019L9.82749 16.4378C9.82749 16.1777 10.0957 16.245 10.1505 16.3273L13.289 21.7139C13.4498 21.9956 13.7321 21.7191 13.7321 21.6201V15.9956" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Png01Icon;
