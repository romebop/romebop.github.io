import { HSL } from 'src/types';

export const colors = {
  primary: '#00c0ff',
  secondary: null,
  inactive: '#e2e2e2',
  background: '#f0f1f7',
  white: '#fff',
};

export function getHslString({ hue, saturation, lightness }: HSL): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function getHslObj(s: string): HSL {
  const hslRegex = /^hsl\((?<hue>\d+), (?<saturation>\d+)%, (?<lightness>\d+)%\)$/;
  const groups = s.match(hslRegex)!.groups;
  return {
    hue: +groups!.hue,
    saturation: +groups!.saturation,
    lightness: +groups!.lightness,
  };
}

export function setHslLightness(hslStr: string, lightness: number): string {
  const hsl = getHslObj(hslStr);
  hsl.lightness = lightness;
  return getHslString(hsl);
}
