import * as React from "react";
import type { SVGProps } from "react";

interface Touch06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch06Icon = (props: Touch06IconProps) => {
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
        <path d="M7.59994 13.5449V8.97139M7.59994 8.97139V3.42696C7.59994 2.60533 8.3156 2.0022 9.15447 2.0022C9.99333 2.0022 10.6654 2.60533 10.6654 3.42696L10.7334 8.49961M7.59994 8.97139C6.25491 10.1652 4.78332 11.5471 4.58842 11.9334C3.6815 13.2856 3.75284 14.4973 5.29653 16.5677C6.28078 17.8878 7.44758 19.233 7.52002 19.3029C8.32084 20.076 8.10384 21.1215 8.10384 21.9982M10.7334 8.49961V11.0294M10.7334 8.49961C11.4499 7.65763 13.3751 7.95679 13.7788 9.67699M13.8153 11.0254V10.0226C13.8153 9.94349 13.8113 9.86418 13.7999 9.78597M13.7788 9.67699C13.7805 9.68423 13.7822 9.69149 13.7838 9.69878C13.7903 9.72764 13.7956 9.75673 13.7999 9.78597M13.7788 9.67699C13.783 9.71204 13.79 9.74837 13.7999 9.78597M13.7788 9.67699C14.0069 8.49961 16.7373 8.77029 16.8636 10.8789V12.0249M17.8438 21.9936V20.9545C17.8829 19.728 18.9212 19.3569 19.5379 18.017C20.1616 16.7848 19.9729 13.6552 19.9729 12.1566C19.9998 11.8013 19.7571 10.7668 18.6312 10.3755C18.2774 10.2077 17.4819 9.96666 16.797 10.4491" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Touch06Icon;
