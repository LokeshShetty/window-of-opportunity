export type CollageTile = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  ratio: number;
  /* tiny blur of the image itself, shown while it loads */
  blur: string;
};
