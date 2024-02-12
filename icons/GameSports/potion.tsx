import * as React from "react";
import type { SVGProps } from "react";

interface PotionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PotionIcon = (props: PotionIconProps) => {
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
        <path d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 15C13 16.3807 11.8807 17.5 10.5 17.5C9.11929 17.5 8 16.3807 8 15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.4609 4.98405C12.4771 4.82626 12.4804 4.66723 12.4705 4.50845L12.3476 2.53028C12.3264 2.18962 12.657 1.92903 12.9983 2.01736L17.6108 3.21118C17.9521 3.29951 18.1035 3.68484 17.9088 3.96964L16.7784 5.62342C16.6877 5.75616 16.6081 5.89545 16.5405 6.03991M12.4609 4.98405C12.4443 5.1461 12.414 5.30684 12.3702 5.46466L11.5176 8M12.4609 4.98405L11 4.60593M12.4609 4.98405L16.5405 6.03991M16.5405 6.03991C16.471 6.18829 16.414 6.34212 16.3702 6.49993L15.6587 9M16.5405 6.03991L18 6.41766" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 15H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.008 12L13.999 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PotionIcon;
