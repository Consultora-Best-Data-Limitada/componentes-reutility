export default class Color {
  // HSV
  hue: number; // 0-360
  saturation: number; // 0-1
  value: number; // 0-1

  constructor(hue: number, saturation: number, value: number) {
    this.hue = hue;
    this.value = value;
    this.saturation = saturation;
  }

  get rgb() {
    return Color.hsvToRgb(this.hue, this.saturation, this.value);
  }

  get hex() {
    const result = this.rgb.map((value) => value.toString(16).padStart(2, "0"));
    return `#${result.join("")}`;
  }

  setFromRgb(red: number, green: number, blue: number) {
    const [hue, saturation, value] = Color.rgbToHsv(red, green, blue);
    this.hue = hue;
    this.value = value;
    this.saturation = saturation;
  }

  setFromHex(hex: string) {
    const [red, green, blue] = Color.hexToRgb(hex);
    this.setFromRgb(red, green, blue);
  }

  static rgbToHsv(red: number, green: number, blue: number) {
    const redPercent = red / 255;
    const greenPercent = green / 255;
    const bluePercent = blue / 255;
    const max = Math.max(redPercent, greenPercent, bluePercent);
    const min = Math.min(redPercent, greenPercent, bluePercent);
    let hue = 0;
    let saturation = 0;
    const value = max;
    const maxMinDifference = max - min;
    if (max === min) {
      hue = 0;
    } else if (max === redPercent && greenPercent >= bluePercent) {
      hue = 60 * ((greenPercent - bluePercent) / maxMinDifference);
    } else if (max === redPercent && greenPercent < bluePercent) {
      hue = 60 * ((greenPercent - bluePercent) / maxMinDifference) + 360;
    } else if (max === greenPercent) {
      hue = 60 * ((bluePercent - redPercent) / maxMinDifference) + 120;
    } else if (max === bluePercent) {
      hue = 60 * ((redPercent - greenPercent) / maxMinDifference) + 240;
    }
    if (max > 0) {
      saturation = 1 - min / max;
    }
    return [Math.round(hue), Math.round(saturation * 100) / 100, Math.round(value * 100) / 100];
  }

  static hsvToRgb(hue: number, saturation: number, value: number) {
    const hueSector = Math.floor(hue / 60) % 6;
    const hueFraction = ((hue / 60) % 6) - hueSector;
    const valueP = value * (1 - saturation);
    const valueQ = value * (1 - hueFraction * saturation);
    const valueT = value * (1 - (1 - hueFraction) * saturation);
    let red = 0;
    let green = 0;
    let blue = 0;
    switch (hueSector) {
      case 0:
        red = value;
        green = valueT;
        blue = valueP;
        break;
      case 1:
        red = valueQ;
        green = value;
        blue = valueP;
        break;
      case 2:
        red = valueP;
        green = value;
        blue = valueT;
        break;
      case 3:
        red = valueP;
        green = valueQ;
        blue = value;
        break;
      case 4:
        red = valueT;
        green = valueP;
        blue = value;
        break;
      case 5:
        red = value;
        green = valueP;
        blue = valueQ;
        break;
    }
    return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
  }

  static hexToRgb(hex: string) {
    const regex = /^#([\da-fA-F]{3}|[\da-fA-F]{6})$/g;
    if (!regex.test(hex)) return [0, 0, 0];
    hex = hex.slice(1);
    let red;
    let green;
    let blue;
    if (hex.length === 3) {
      const [hexR, hexG, hexB] = hex.split("");
      red = parseInt(hexR.repeat(2), 16);
      green = parseInt(hexG.repeat(2), 16);
      blue = parseInt(hexB.repeat(2), 16);
    } else {
      const [hexR, hexG, hexB] = hex.match(/.{2}/g) ?? ["0", "0", "0"];
      red = parseInt(hexR, 16);
      green = parseInt(hexG, 16);
      blue = parseInt(hexB, 16);
    }
    return [red, green, blue];
  }

  static fromRgb(red: number, green: number, blue: number) {
    const [h, s, v] = Color.rgbToHsv(red, green, blue);
    return new Color(h, s, v);
  }

  static fromHex(hex: string) {
    const [red, green, blue] = Color.hexToRgb(hex);
    return Color.fromRgb(red, green, blue);
  }
}
