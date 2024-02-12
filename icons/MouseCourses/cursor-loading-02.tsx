import * as React from "react";
import type { SVGProps } from "react";

interface CursorLoading02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorLoading02Icon = (props: CursorLoading02IconProps) => {
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
        <path d="M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.7756 13H16.2244C15.5866 13 15.0271 13.4431 15.0015 14.0816C14.9694 14.885 15.5187 15.4184 16.0956 15.9192L16.0956 15.9192C16.8937 16.612 17.2928 16.9584 17.3346 17.3969C17.3412 17.4655 17.3412 17.5345 17.3346 17.6031C17.2928 18.0416 16.8937 18.388 16.0956 19.0808C15.5028 19.5954 14.9677 20.0738 15.0015 20.9184C15.0271 21.5569 15.5866 22 16.2244 22L20.7756 22C21.4134 22 21.9729 21.5569 21.9985 20.9184C22.0188 20.4101 21.8357 19.9039 21.4467 19.552C21.2693 19.3915 21.0851 19.2377 20.9044 19.0808L20.9044 19.0808C20.1063 18.388 19.7072 18.0416 19.6653 17.6031C19.6588 17.5345 19.6588 17.4655 19.6653 17.3969C19.7072 16.9584 20.1063 16.612 20.9044 15.9192C21.491 15.41 22.0319 14.9161 21.9985 14.0816C21.9729 13.4431 21.4134 13 20.7756 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CursorLoading02Icon;
