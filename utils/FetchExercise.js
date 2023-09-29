import axios from "axios";

// It will called on the server, and after we'll make SSG renders;
export async function fetchExercise(id) {
  try {
    const res = await axios(`${process.env.NEXT_PUBLICK_CURRENT_DOMAIN}/api/exercises/${id}`);
    return res.data;
  } catch (error) {
    return {};
  }
}
