import Grid from "@/components/grid";
import connectDB from "@/db/db"


export default async function List(){
    const db = await connectDB();
    const [rows] = await db.query("select * from info");
    // console.log(rows)
   
    

    return(
        <div className="grid grid-cols-4 gap-2" >
            {rows.map((props,i)=>(
                <Grid key={i} pocket={props} index = {i+1} />
            ))}
            
        </div>
    )
}