import axios from "axios";

export async function fetchExercisesTypes() {
  try {
    const res = await axios(`${process.env.NEXT_PUBLICK_CURRENT_DOMAIN}/api/exercisesTypes/`);
    return res.data;
  } catch (error) {
    return [];
  }
}