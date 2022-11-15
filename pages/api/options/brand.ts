// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: { label: string; value: string }[];
};

const getBrand = () => {
  const brand = faker.vehicle.manufacturer();

  return { label: brand, value: brand.toLocaleLowerCase().replace(' ', '-') }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      getBrand(),
      getBrand(),
      getBrand(),
      getBrand(),
      getBrand(),
      getBrand(),
    ],
  });
}
