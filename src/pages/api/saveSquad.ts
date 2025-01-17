// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.body);


  fs.writeFile("./public/data/squad.json",JSON.stringify(req.body), (err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written file has the following contents:");
        console.log("req");
    }
});


  res.status(200).json({ name: "John Doe" });
}
