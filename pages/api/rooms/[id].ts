// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import rooms from "../../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof rooms | { message: string } | any>
) {
  const room = rooms.filter((room) => room.fields.slug === req.query.id);
  if (room && room.length > 0) {
    res.status(200).json(room[0]);
  } else {
    res.status(404).json({ message: "Not found." });
  }
}
