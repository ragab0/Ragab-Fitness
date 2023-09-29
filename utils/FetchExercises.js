import axios from "axios";

export async function fetchExercises() {
  try {
    const res = await axios(`${process.env.NEXT_PUBLICK_CURRENT_DOMAIN}/api/exercises/`);
    return res.data;
  } catch (error) {
    return [];
  }
}