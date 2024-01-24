interface Place {
  name: string;
  description: string;
  link?: string;
  imgName?: string;
  path: string;
}

interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export {
  type Place,
  type HSL,
}