import axios from "axios";

export async function fetchExercises() {
  try {
    const res = await axios(`/api/exercises/`);
    return res.data;
  } catch (error) {
    return [];
  }
}