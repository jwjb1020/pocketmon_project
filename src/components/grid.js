"use client"
export default function Grid({pocket, index}){
    // console.log(index);
    const indexString = index.toString().padStart(4, '0');
    
    const gridInfo = pocket;
    return(
        <div className="p-2 m-6 border border-blue-300  justify-center items-center">
            {index < 538 ? <img className="w-52 h-52 mx-auto hover:scale-110" src = {`/images/divide1/poketmon/${indexString}.png`} ></img>
            : <img className="w-52 h-52 mx-auto hover:scale-110" src = {`/images/divide2/poketmon/${indexString}.png`} ></img>
            }
            <div className="flex flex-col m-2">
                <span>도감번호 : No.{gridInfo.no}</span>
                <span>이름: {gridInfo.name} {gridInfo.figure && `(${gridInfo.figure})` }</span>
                <span>분류: {gridInfo.class}</span>

            </div>
        </div>

    )
}