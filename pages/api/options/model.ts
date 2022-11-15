// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: { label: string; value: string }[];
};

const getModel = () => {
  const model = faker.vehicle.model();

  return { label: model, value: model.toLocaleLowerCase().replace(" ", "-") };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [getModel(), getModel(), getModel(), getModel(), getModel()]
  });
}
