import axios from "axios";

export async function fetchExercisesTypes() {
  try {
    const res = await axios(`/api/exercisesTypes/`);
    return res.data;
  } catch (error) {
    return [];
  }
}