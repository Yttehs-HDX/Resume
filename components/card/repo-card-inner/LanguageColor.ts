import axios from "axios";

export async function getLanguageColor(language: string) {
    const url = `https://raw.githubusercontent.com/ozh/github-colors/refs/heads/master/colors.json`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    // console.log(data);
    return data[language].color as string;
  } catch (error) {
    return "#FFF";
  }
}
