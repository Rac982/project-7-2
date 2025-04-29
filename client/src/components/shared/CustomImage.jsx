import React from 'react'

const CustomImage = ({ src, alt, className, style = {} }) => {
    return (
        <img crossOrigin="anonymous" className={className} src={src} alt={alt} style={style} />
    )
}

export default CustomImage