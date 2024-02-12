import * as React from "react";
import type { SVGProps } from "react";

interface AiBrain02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiBrain02Icon = (props: AiBrain02IconProps) => {
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
        <path d="M12 4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465C4.15822 15.3996 4 15.9313 4 16.5C4 18.1569 5.34315 19.5 7 19.5C7 20.8807 8.11929 22 9.5 22C10.8807 22 12 20.8807 12 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.5C12 20.8807 13.1193 22 14.5 22C15.8807 22 17 20.8807 17 19.5C18.6569 19.5 20 18.1569 20 16.5C20 15.9313 19.8418 15.3996 19.567 14.9465C20.9527 14.6814 22 13.463 22 12C22 10.537 20.9527 9.31855 19.567 9.0535C19.8418 8.60037 20 8.06866 20 7.5C20 5.84315 18.6569 4.5 17 4.5C17 3.11929 15.8807 2 14.5 2C13.1193 2 12 3.11929 12 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.487 7.00098V8.98M7 10.5014H9.05198M15.0231 10.5014H17.075M15.0231 13.4746H17.075M7 13.4746H9.05198M10.487 15.0202V16.9992M13.5125 15.0202V16.9992M13.5017 7.00098V8.98M10.052 14.9685H14.0231C14.5753 14.9685 15.0231 14.5208 15.0231 13.9685V9.98C15.0231 9.42771 14.5753 8.98 14.0231 8.98H10.052C9.49969 8.98 9.05198 9.42771 9.05198 9.98V13.9685C9.05198 14.5208 9.49969 14.9685 10.052 14.9685Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiBrain02Icon;
