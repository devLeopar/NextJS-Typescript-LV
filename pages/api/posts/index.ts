import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../../../posts";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(posts);
}
