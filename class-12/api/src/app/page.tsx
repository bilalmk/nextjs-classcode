//===================== SIMPLE EXAMPLE====================
// const getData = async()=>{
//     try{
//     const response = await fetch("https://simple-books-api.glitch.me/booksddd")
//     if(response.status!=200)
//       throw new Error(`data not found ${response.status}--${response.statusText}`)
//     const books = await response.json()
//     return books
//   }
//   catch(ex)
//   {
//     console.log(ex.message)
//   }
// }

// export default async function Home() {
//   const bookList = await getData()
    
//   return (
//       <div>
//         <ul>
//           {
//             bookList?
//             bookList.map((book, index)=>{
//             return <li key={index}>{book.id}--{book.name}</li>
//             })
//             :
//             "Data not found"
//       }</ul></div>
//   );
// }
//===================== END SIMPLE EXAMPLE================


//=====================COMPLEX EXAMPLE===================
const getData = async()=>{
  try{
  const response = await fetch("https://simple-books-api.glitch.me/books")
  console.log(response)
  if(response.status!=200)
    throw new Error(`data not found ${response.status}--${response.statusText}`)
  const books = await response.json()
  return {data:books,message:"data fetch successfully",success:true}
}
catch(ex)
{
  return {data:null,message:ex.message,success:false}
}
}

export default async function Home() {
  const bookList = await getData()

  // for(let i=0;i<bookList.length;i++)
  // {
  //   console.log(bookList[i])
  //   console.log("=========")
  // }

  // bookList.map((b,index)=>{
  //   console.log(b)
  //   console.log("===============")
  // })
    
  return (
      <div>
        <ul>
          {
            bookList.success?
            bookList.data.map((book:{id:number, name:string, type:string, available:boolean}, index:number)=>{
            return <li key={index}>{book.id}--{book.name}</li>
            })
            :
            bookList.message
      }</ul></div>
  );
}
//======================END COMPLEX EXAMPLE==============================
