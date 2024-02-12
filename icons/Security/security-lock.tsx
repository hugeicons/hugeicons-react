import * as React from "react";
import type { SVGProps } from "react";

interface SecurityLockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecurityLockIcon = (props: SecurityLockIconProps) => {
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
        <path d="M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3371 10.3799C9.25714 10.3799 8.71714 11.1599 8.59714 11.6399C8.47714 12.1199 8.47714 13.8599 8.54914 14.5799C8.78914 15.4799 9.38914 15.8519 9.97714 15.9719C10.5171 16.0199 12.7971 16.0019 13.4571 16.0019C14.4171 16.0199 15.1371 15.6599 15.4371 14.5799C15.4971 14.2199 15.5571 12.2399 15.4071 11.6399C15.0891 10.6799 14.2971 10.3799 13.6971 10.3799H10.3371Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.25 9.95854C10.25 9.89854 10.2582 9.55312 10.2596 9.11854C10.2609 8.72145 10.226 8.33854 10.4156 7.98814C11.126 6.57454 13.166 6.71854 13.67 8.15854C13.7573 8.39562 13.7626 8.77146 13.76 9.11854C13.7567 9.56203 13.766 9.95854 13.766 9.95854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SecurityLockIcon;
