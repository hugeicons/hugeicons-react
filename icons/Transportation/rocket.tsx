import * as React from "react";
import type { SVGProps } from "react";

interface RocketIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RocketIcon = (props: RocketIconProps) => {
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
        <path d="M8 10.1667L12.1232 6.04344C13.2481 4.91858 13.8105 4.35614 14.4312 3.90314C15.7047 2.9737 17.1818 2.36187 18.7395 2.11858C19.4988 2 20.2942 2 21.885 2C21.9681 2 22 2.03812 22 2.11504C22 3.70584 22 4.50125 21.8814 5.26046C21.6381 6.81818 21.0263 8.29527 20.0969 9.56878C19.6439 10.1895 19.0814 10.7519 17.9566 11.8768L13.8333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.341 8.09838C8.63808 8.09838 6.49778 7.73765 4.9043 8.39769C3.73671 8.88132 2.87754 10.0012 2 10.8787L5.30597 12.2955C6.18208 12.671 5.64651 13.7766 5.50147 14.5018C5.33985 15.3099 5.34886 15.3397 5.93158 15.9224L8.07758 18.0684C8.6603 18.6511 8.69008 18.6602 9.49816 18.4985C10.2234 18.3535 11.329 17.8179 11.7044 18.694L13.1213 22C13.9988 21.1225 15.1187 20.2633 15.6023 19.0957C16.2624 17.5022 15.9016 15.3619 15.9016 13.659" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 20L11 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4.08008C16.2 4.26008 17.46 4.74008 18.1614 5.46008C19.0576 6.25224 19.68 7.32008 19.92 9.00008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M17.94 6.06055L16.5 7.50055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RocketIcon;
