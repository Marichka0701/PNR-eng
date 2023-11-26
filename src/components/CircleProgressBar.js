import React from 'react';

const CircleProgressBar = ({ progress, fill }) => {
    const radius = 63;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg width="140" height="140">
            <circle
                fill={fill}
                fillOpacity={0.2}
                strokeWidth={0}
                r={68}
                cx="70"
                cy="70"
            />
            <circle
                stroke={fill}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                style={{ strokeDashoffset }}
                r={radius}
                cx="70"
                cy="70"
                strokeLinecap={'round'}
            />
            <text
                x="70"
                y="70"
                textAnchor="middle"
                dy=".3em"
                fontSize="20px"
                fill="#000"
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

export default CircleProgressBar;
