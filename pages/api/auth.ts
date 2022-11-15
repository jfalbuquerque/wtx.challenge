// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sign } from "jsonwebtoken";

type Data = {};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.query as {
    username: string;
    password: string;
  };

  // if (password !== "Password123+" || username !== "buyer@wtx.com") {
  if (password !== "pass" || username !== "user") {
    return res.status(400).json({
      message: "invalid password + username combination",
    });
  }

  res.status(200).json({
    token: sign({ name: username }, "SECRET_KEY", { expiresIn: "1h" }),
    username,
  });
}
