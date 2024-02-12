import * as React from "react";
import type { SVGProps } from "react";

interface KitchenUtensilsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KitchenUtensilsIcon = (props: KitchenUtensilsIconProps) => {
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
        <path d="M11.9832 14V3M11.9832 14C10.3248 14 8.98047 15.4354 8.98047 16.625C8.98047 18.375 10.3248 21 11.9832 21C13.6414 21 14.9858 18.375 14.9858 16.625C14.9858 15.4354 13.6414 14 11.9832 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.9785 10.0282L4.9785 20.9998M3.68624 3.12927L2.90356 3.20735C2.33235 3.26433 1.92605 3.78866 2.01391 4.35545L2.68289 8.671C2.79621 9.40206 3.42609 10.0105 4.16653 10.0105H5.79049C6.53093 10.0105 7.1608 9.40206 7.27413 8.671L7.9431 4.35545C8.03096 3.78866 7.62467 3.26433 7.05345 3.20735L6.27346 3.12943C5.4132 3.0435 4.54651 3.04344 3.68624 3.12927Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.9961 13.8182L17.9961 3.02588C19.1546 3.34586 21.0816 4.55262 21.4007 7.52836L21.9738 12.0423C22.0744 12.835 21.8728 13.6261 21.0847 13.7615C20.4245 13.875 19.423 13.9121 17.9961 13.8182ZM17.9961 13.8182L17.9961 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KitchenUtensilsIcon;
