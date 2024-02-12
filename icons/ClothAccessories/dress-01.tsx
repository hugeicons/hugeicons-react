import * as React from "react";
import type { SVGProps } from "react";

interface Dress01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dress01Icon = (props: Dress01IconProps) => {
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
        <path d="M7.61 2.14784L7.80042 2.10879C8.28808 2.00879 8.53191 1.95878 8.6895 2.04196C8.84709 2.12513 8.97976 2.43743 9.24511 3.06201C9.72042 4.1808 10.8245 4.96667 12 4.96667C13.1755 4.96667 14.2796 4.1808 14.7549 3.06201C15.0202 2.43743 15.1529 2.12513 15.3105 2.04196C15.4681 1.95878 15.7119 2.00879 16.1996 2.10879L16.39 2.14784C17.6491 2.37796 17.6688 2.38943 18.5326 3.39279C19.2624 4.24054 20.3084 5.10683 20.8298 6.12714C21.2138 6.87858 20.8865 7.52282 20.4556 8.11982C19.9173 8.86548 19.2184 9.58165 18.272 9.00146C17.6678 8.63097 17.1859 7.8491 16.7173 7.30819C16.7173 7.30819 17 10.9245 16 11.9314C16.9077 12.5863 18.3424 13.8579 19.4805 16.4642C19.8862 17.3932 20.4317 18.4519 19.8937 19.4437C18.0646 22.8153 5.97514 22.8887 4.10625 19.4437C3.56824 18.4519 4.11378 17.3932 4.51948 16.4642C5.65756 13.8579 7.0923 12.5863 8 11.9314C7 10.9245 7.2827 7.30819 7.2827 7.30819C6.81411 7.8491 6.33223 8.63098 5.72796 9.00146C4.78163 9.58165 4.08274 8.86548 3.54444 8.11982C3.11346 7.52283 2.78615 6.87858 3.17016 6.12714C3.69156 5.10683 4.73757 4.24054 5.46741 3.39279C6.33123 2.38941 6.35093 2.37797 7.61 2.14784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dress01Icon;
