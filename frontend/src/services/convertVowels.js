import { vowels } from "../constants/vowels";

export const convertVowels = (value) => {
  if (typeof value === "string") {
    let newText = value.toLowerCase();
    for (let i = 0; i < vowels.length; i++)
      for (let i2 = 0; i2 < vowels.length; i2++)
        newText = newText.replaceAll(vowels[i][i2], vowels[i][0]);

    return newText;
  }
  return value;
};
