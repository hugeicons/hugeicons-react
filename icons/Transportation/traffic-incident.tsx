import * as React from "react";
import type { SVGProps } from "react";

interface TrafficIncidentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TrafficIncidentIcon = (props: TrafficIncidentIconProps) => {
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
        <path d="M3 1.99805H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.7065 21.4609L10.7642 20.356M10.7642 20.356C11.0614 20.4329 11.5801 20.5697 11.8475 20.7115C14.1849 21.9513 14.724 22.3964 15.6596 21.6119L19.6081 17.7118C20.4039 16.7862 19.9641 16.243 18.7478 13.8959C18.6087 13.6272 18.4423 13.1425 18.3685 12.8449M10.7642 20.356C9.6351 20.0638 8.61165 20.1536 7.91851 19.6222C7.80514 19.5353 6.70763 18.3999 5.90132 17.586C5.29549 16.9745 5.90619 16.4083 6.43603 15.7908C6.77273 15.3984 7.07438 14.9695 7.43859 14.6024C9.4572 12.5676 10.8034 11.2337 12.8421 9.26321C13.2363 8.88215 13.7016 8.56682 14.1228 8.21572C14.5986 7.81919 15.1062 7.41506 15.6824 7.92493C16.5414 8.68505 17.6138 9.84696 17.6996 9.96109C18.2242 10.6589 18.0881 11.7144 18.3685 12.8449M10.7642 20.356L18.3685 12.8449M18.3685 12.8449L19.4853 12.7081M8.02515 19.6975L8.98808 18.4665M10.9943 14.5034L12.7186 12.8899M16.506 10.967L17.9194 10.3572M12.6945 9.36507L11.8555 8.48625C11.4739 8.08651 11.4897 7.45339 11.8908 7.07316L12.6923 6.31343C13.0846 5.94148 13.7021 5.94858 14.0858 6.32945L15.529 7.76203M7.40395 14.7199L6.53456 13.8711C6.13911 13.485 5.50489 13.4927 5.11903 13.8884L4.34804 14.6789C3.97057 15.0659 3.96983 15.6825 4.34637 16.0704L5.76263 17.5296" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TrafficIncidentIcon;
