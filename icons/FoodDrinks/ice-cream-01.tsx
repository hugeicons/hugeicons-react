import * as React from "react";
import type { SVGProps } from "react";

interface IceCream01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IceCream01Icon = (props: IceCream01IconProps) => {
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
        <path d="M12 12.1534C14.4268 12.1534 16.7094 11.8086 18.6994 11.202C19.3273 11.0106 19.6412 10.9149 19.8479 11.0982C20.0546 11.2815 20.0152 11.5735 19.9363 12.1577C19.4239 15.9501 16.0416 19 12 19C7.95837 19 4.57608 15.9501 4.06374 12.1577C3.98483 11.5735 3.94537 11.2815 4.15209 11.0982C4.3588 10.9149 4.67272 11.0106 5.30056 11.202C7.29063 11.8086 9.57324 12.1534 12 12.1534Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 19V22H9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.08771 5C6.61656 6.46159 8.10425 7.61154 10.0967 7.22833C11.8214 6.89661 11.4094 7.44878 13.5462 7.89178C16.0476 8.41038 17 6.94879 17 5.97439" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.99609 9.02924C5.29578 7.27396 6.7514 3.89183 10.4974 2.9928" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.0234 9.00095C18.6983 7.501 17.252 3.87646 13.5404 3.01184" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default IceCream01Icon;
