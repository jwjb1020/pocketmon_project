"use client"
export default function Grid({pocket, index}){
    // console.log(index);
    const indexString = index.toString().padStart(4, '0');
    
    const gridInfo = pocket;
    return(
        <div>
            <img className="w-52 h-52" src = {`/images/poketmon${indexString}.png`} ></img>
            <div className="">
                <p>도감번호 : {gridInfo.no}</p>
                <p>이름: {gridInfo.name}</p>
                <p>분류: {gridInfo.class}</p>

            </div>
        </div>

    )
}