// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { faker } from "@faker-js/faker";

type Data = {};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const authHeader = req.headers.authorization?.split('Bearer ');

  if (typeof authHeader?.[1] !== 'string') {
    return res.status(403).end();
  }

  const [_, token] = authHeader;

  try {
    verify(token, 'SECRET_KEY')
  } catch(e) {
    return res.status(403).json({
      message: 'unauthorized'
    })
  }

  res.status(200).json({
    username: faker.internet.userName(),
    address: faker.address.streetAddress(),
    country: faker.address.countryCode()
  });
}
