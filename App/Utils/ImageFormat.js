export default function format( image_url ) {
    if (image_url.startsWith( 'https://pic.suiyueyule.com/' ) || image_url.startsWith( 'https://static.suiyueyule.com/' )) {
        return image_url.replace( /\-works\.\d+\.\d+\.gif$/gi, '' ).replace( /\-works\.\d+\.\d+\.webp$/gi, "" );
    } else {
        return image_url;
    }
}