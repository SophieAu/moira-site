import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/images/*.{jpg,jpeg,png,webp,avif}',
);

export const getRawImage = async (path: string) => {
    const image = images[`/src${path}`];
    if (!image) throw Error(`image ${path} not found in src/assets/images`);
    return (await image()).default;
};