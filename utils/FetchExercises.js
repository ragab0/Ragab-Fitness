import axios from "axios";

export async function fetchExercises() {
  try {
    const res = await axios(`${process.env.NEXT_PUBLICK_URL}/api/exercises/`);
    return res.data;
  } catch (error) {
    return [];
  }
}