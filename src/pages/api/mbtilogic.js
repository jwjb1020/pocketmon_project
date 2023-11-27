import connectDB from "@/db/db";

export default async function handler(req, res) {
  
  if (req.method === "GET") {
    const id = req.query.id;
    const db = await connectDB();
    const [question] = await db.query("select * from mbtiq where id =?", [id]);
    const [answers] = await db.query("select answer,class from mbtia where mbtino = ?", [id]);

    res.status(200).json({ question: question[0], answers });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
