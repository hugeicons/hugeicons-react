import * as React from "react";
import type { SVGProps } from "react";

interface Blockchain07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Blockchain07Icon = (props: Blockchain07IconProps) => {
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
        <path d="M5.5 10.5C5.62215 10.5 5.73571 10.4435 5.96282 10.3304L7.78832 9.42162C8.59611 9.01948 9 8.81841 9 8.5V4.5M5.5 10.5C5.37785 10.5 5.26429 10.4435 5.03718 10.3304L3.21168 9.42162C2.4039 9.01948 2 8.81841 2 8.5V4.5M5.5 10.5V6.5M9 4.5C9 4.18159 8.59611 3.98052 7.78832 3.57838L5.96282 2.66959C5.73571 2.55653 5.62215 2.5 5.5 2.5C5.37785 2.5 5.26429 2.55653 5.03718 2.66959L3.21168 3.57838C2.40389 3.98052 2 4.18159 2 4.5M9 4.5C9 4.81841 8.59611 5.01948 7.78832 5.42162L5.96282 6.33041C5.73571 6.44347 5.62215 6.5 5.5 6.5M2 4.5C2 4.81841 2.40389 5.01948 3.21168 5.42162L5.03718 6.33041C5.26429 6.44347 5.37785 6.5 5.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18.5 10.5C18.6222 10.5 18.7357 10.4435 18.9628 10.3304L20.7883 9.42162C21.5961 9.01948 22 8.81841 22 8.5V4.5M18.5 10.5C18.3778 10.5 18.2643 10.4435 18.0372 10.3304L16.2117 9.42162C15.4039 9.01948 15 8.81841 15 8.5V4.5M18.5 10.5V6.5M22 4.5C22 4.18159 21.5961 3.98052 20.7883 3.57838L18.9628 2.66959C18.7357 2.55653 18.6222 2.5 18.5 2.5C18.3778 2.5 18.2643 2.55653 18.0372 2.66959L16.2117 3.57838C15.4039 3.98052 15 4.18159 15 4.5M22 4.5C22 4.81841 21.5961 5.01948 20.7883 5.42162L18.9628 6.33041C18.7357 6.44347 18.6222 6.5 18.5 6.5M15 4.5C15 4.81841 15.4039 5.01948 16.2117 5.42162L18.0372 6.33041C18.2643 6.44347 18.3778 6.5 18.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 6.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12.5V16C2 17.4045 2 18.1067 2.33706 18.6111C2.48298 18.8295 2.67048 19.017 2.88886 19.1629C3.39331 19.5 4.09554 19.5 5.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.0001 12.5V16C22.0001 17.4045 22.0001 18.1067 21.6631 18.6111C21.5172 18.8295 21.3297 19.017 21.1113 19.1629C20.6068 19.5 19.9045 19.5 18.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.25 16.9311C10.4252 16.9286 10.6188 16.9286 10.8333 16.9286H13.1667C13.3812 16.9286 13.5748 16.9286 13.75 16.9311M10.25 16.9311C9.52679 16.9413 9.11678 16.9939 8.84171 17.2633C8.5 17.598 8.5 18.1368 8.5 19.2143C8.5 20.2918 8.5 20.8305 8.84171 21.1653C9.18342 21.5 9.73339 21.5 10.8333 21.5H13.1667C14.2666 21.5 14.8166 21.5 15.1583 21.1653C15.5 20.8305 15.5 20.2918 15.5 19.2143C15.5 18.1368 15.5 17.598 15.1583 17.2633C14.8832 16.9939 14.4732 16.9413 13.75 16.9311M10.25 16.9311V15.2143C10.25 14.2675 11.0335 13.5 12 13.5C12.9665 13.5 13.75 14.2675 13.75 15.2143V16.9311" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Blockchain07Icon;
