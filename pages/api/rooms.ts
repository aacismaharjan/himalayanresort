// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import rooms from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof rooms>
) {
  res.status(200).json(rooms);
}
