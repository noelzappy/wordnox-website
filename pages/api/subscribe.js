/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
import { API_URL } from "../../helpers/contentAPI";

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Email and Name is required" });
    }

    const _res = await axios.post(API_URL + "/members/api/send-magic-link/", {
      email,
      name,
      emailType: "subscribe",
      labels: [],
      autoRedirect: true,
      urlHistory: [],
      newsletters: [{ name: "Wordnox Blog" }],
    });

    const { data } = _res;

    console.log(data);

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to add you up. Please try again" });
  }
};
