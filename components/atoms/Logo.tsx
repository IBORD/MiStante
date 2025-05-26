import React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    size: number;
    rounded?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
                                              src,
                                              alt,
                                              size,
                                              rounded = true,
                                              ...imgProps
                                          }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={`${rounded ? 'rounded-full' : ''}`}
            {...imgProps}
        />
    );
};
