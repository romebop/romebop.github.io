import { HSL } from 'src/types';

function getAcronym(name: string): string {
  return name.split(/[\s-]+/)
    .map(s => s[0].toUpperCase())
    .join('');
}

function getHslString({ hue, saturation, lightness }: HSL): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getHslObj(s: string): HSL {
  const hslRegex = /^hsl\((?<hue>\d+), (?<saturation>\d+)%, (?<lightness>\d+)%\)$/;
  const groups = s.match(hslRegex)!.groups;
  return {
    hue: +groups!.hue,
    saturation: +groups!.saturation,
    lightness: +groups!.lightness,
  };
}

function setHslLightness(hslStr: string, lightness: number): string {
  const hsl = getHslObj(hslStr);
  hsl.lightness = lightness;
  return getHslString(hsl);
}


export {
  getAcronym,
  getHslString,
  getHslObj,
  setHslLightness,
}
