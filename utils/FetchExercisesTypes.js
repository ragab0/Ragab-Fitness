import axios from "axios";

export async function fetchExercisesTypes() {
  try {
    const res = await axios(`${process.env.NEXT_PUBLICK_URL}/api/exercisesTypes/`);
    return res.data;
  } catch (error) {
    return [];
  }
}