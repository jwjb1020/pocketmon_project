import connectDB from "@/db/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const mbticlass = req.query.mbti;
    const db = await connectDB();
    try {
      const [result] = await db.query("SELECT * FROM charactor WHERE mbticlass = ?", [mbticlass]);
      console.log(result);
      res.status(200).json(result[0]);
    } catch (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      // 연결을 닫습니다.
      db.end();
    }
  }
}