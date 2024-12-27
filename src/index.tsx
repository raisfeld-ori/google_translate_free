import axios from 'axios';

export async function translate(
    text: string,
  from: string,
  to: string
): Promise<string | null> {
  try {
    const response = await axios.get(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`
      );
    
    return response.data[0][0][0];
  } catch (error) {
    console.error('Translation failed:', error);
    return null;
  }
}