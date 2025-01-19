

export default async function Home() {

  const fetchData =async () => {
    const res = await fetch("https://fakerapi.it/api/v1/persons?_l",{next:{revalidate: 1000}})
    const data = await res.json()
    return data
  }

  const data = await fetchData()
  console.log("data>>>",data.data)
  return (
   <div>
    <h1>{data.data[0].firstname}</h1>
   </div>
  )
}
