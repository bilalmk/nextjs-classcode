export default function Page({params}:{params:{country_name:string}}) {
    return (
        <div>Category: {params.country_name}</div>
    );
}