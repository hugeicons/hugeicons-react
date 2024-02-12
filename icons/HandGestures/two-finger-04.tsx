import * as React from "react";
import type { SVGProps } from "react";

interface TwoFinger04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TwoFinger04Icon = (props: TwoFinger04IconProps) => {
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
        <path d="M7.70761 14.0219V9.47032M7.70761 9.47032L7.74677 6.10761C7.74677 5.1467 8.37716 4.51567 9.14882 4.48266C10.089 4.44244 10.7542 5.04715 10.7542 6.00806L10.7757 10.4659L10.7542 4.07047C10.7542 3.10956 11.3985 2.49951 12.2479 2.49951C13.0974 2.49951 13.7475 3.06197 13.7475 4.02288V6.96468L13.7598 10.5091V9.50876C13.7598 9.4472 13.7574 9.38549 13.751 9.32426M7.70761 9.47032L5.86823 11.3106C5.37351 11.8779 4.79033 12.5496 4.60481 12.887C4.21497 13.5958 4.15674 14.2214 4.38773 14.9582C4.64889 15.6217 4.88352 16.0979 5.36007 16.719C5.7085 17.1732 6.04584 17.8197 6.39788 18.2711C6.90502 18.9214 7.18209 19.3333 7.48867 19.7332C7.5219 19.7765 7.55386 19.8158 7.58486 19.8517C8.01897 20.3554 8.62637 20.6822 9.21034 21.001L9.4337 21.1229C10.1974 21.3706 11.2649 21.5826 13.0063 21.4706C14.2869 21.4719 15.753 21.6065 16.7234 21.0735C16.7653 21.0505 16.8079 21.0288 16.8521 21.0105L17.1538 20.8859C18.5667 20.1796 19.5521 18.6754 19.7013 17.1052C19.7692 16.3912 19.742 15.6105 19.7433 14.8238V11.5862C19.5812 10.3629 18.9469 9.57339 16.5096 9.52714M13.751 9.32426C13.7492 9.30705 13.7471 9.28988 13.7447 9.27276M13.751 9.32426C13.7574 9.35303 13.7405 9.2436 13.7447 9.27276M13.7447 9.27276C13.7447 8.08263 15.7983 8.28119 16.5096 9.52714M16.747 11.5061V10.3629C16.7341 10.047 16.6468 9.76755 16.5096 9.52714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TwoFinger04Icon;
