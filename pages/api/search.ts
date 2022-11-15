// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

type Data = {
  data: {
    image: string;
    name: string;
    model: string;
    brand: string;
    id: string;
    price: {
      value: number;
      currency: string;
    };
  }[];
  metadata: {
    numberOfPages: number;
    hasNext: boolean;
    current: number;
  };
};

function getVehicle({ brand, model }: { brand: string; model: string }) {
  const _brand = brand || faker.vehicle.manufacturer();
  const _model = model || faker.vehicle.model();

  return {
    brand: _brand,
    id: faker.database.mongodbObjectId(),
    image: faker.image.transport(300, 200, true),
    model: _model,
    name: `${brand} ${model} ${faker.vehicle.fuel()}`,
    price: {
      value: parseFloat(faker.commerce.price(10000, 50000)),
      currency: "EUR",
    },
  };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { brand, model, page } = req.query as {
    brand: string;
    model: string;
    page: string;
  };

  const _page = parseInt(page || "0");

  setTimeout(() => {
    res.status(200).json({
      metadata: {
        numberOfPages: faker.datatype.number({ max: 10, min: _page }),
        hasNext: faker.datatype.boolean(),
        current: _page,
      },
      data: Array.from({
        length: faker.datatype.number({ max: 20, min: 1 }),
      }).map((_, index) => {
        return getVehicle({ brand, model });
      }),
    });
  }, faker.datatype.number({ min: 200, max: 3500 }));
}
