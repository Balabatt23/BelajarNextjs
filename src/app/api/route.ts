import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    const data = [{
        id:1,
        name: "John Doe",
        role: "siswa"
    },
    {
        id:2,
        name: "Jane Smith",
        role: "guru"
    },
    {
        id:3,
        name: "Alice Johnson",
        role: "admin"
    }
];
if(id){
    const detailedItem = data.find(item => item.id === Number(id));
    return NextResponse.json({ 
            status: 200,
            message:"success", 
            data: detailedItem 
        })
    
}
  return(
    NextResponse.json({ status: 404,message:"Data Not Found", data: data.find(item => item.id === Number(id)) })
  ) 
}