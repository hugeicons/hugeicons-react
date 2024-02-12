import * as React from "react";
import type { SVGProps } from "react";

interface Cancel02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cancel02Icon = (props: Cancel02IconProps) => {
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
        <path d="M17.2599 10.2467L19.0132 8.49341C19.4209 8.08577 19.6247 7.88196 19.747 7.66993C20.3627 6.60365 19.7517 5.72522 19.0132 4.98681C18.2747 4.24828 17.3964 3.63732 16.33 4.25295C16.118 4.37537 15.9142 4.57918 15.5066 4.98681L13.7533 6.7401C12.9268 7.56662 12.5136 7.97988 12 7.97988C11.4864 7.97988 11.0732 7.56662 10.2467 6.7401L8.49341 4.98681C8.08577 4.57918 7.88196 4.37537 7.66993 4.25295C6.60357 3.63729 5.7253 4.24833 4.98681 4.98681C4.24833 5.7253 3.63729 6.60358 4.25295 7.66993C4.37537 7.88196 4.57918 8.08577 4.98681 8.49341L6.7401 10.2467C7.56662 11.0732 7.97987 11.4864 7.97987 12C7.97987 12.5136 7.56662 12.9268 6.7401 13.7533L4.98681 15.5066C4.57918 15.9142 4.37537 16.118 4.25295 16.33C3.63732 17.3964 4.24827 18.2747 4.98681 19.0132C5.72522 19.7517 6.60365 20.3627 7.66993 19.747C7.88196 19.6247 8.08577 19.4209 8.49341 19.0132L10.2467 17.2599C11.0732 16.4334 11.4864 16.0201 12 16.0201C12.5136 16.0201 12.9268 16.4334 13.7533 17.2599L15.5066 19.0132C15.9142 19.4209 16.118 19.6247 16.33 19.747C17.3964 20.3627 18.2748 19.7518 19.0132 19.0132C19.7518 18.2748 20.3627 17.3964 19.747 16.33C19.6247 16.118 19.4209 15.9142 19.0132 15.5066C18.2124 14.7058 16.0201 13.2175 16.0201 12C16.0201 11.4864 16.4334 11.0732 17.2599 10.2467Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Cancel02Icon;
