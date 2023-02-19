import { data } from "./recipes";

export async function seedRecipes() {
  await fetch("https://restapi.fr/api/testcook", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).save();
}

// mongodb+srv://jeremy:31081984@cluster0.vle3dcv.mongodb.net/?retryWrites=true&w=majority
