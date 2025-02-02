export default function SuccessPayment({searchParams}:{searchParams:{amount:number,redirect_status:string}}) {
    return (
        <div className="flex justify-center items-center m-auto flex-col h-screen bg-blue-300">
            {
            searchParams.redirect_status=="succeeded" 
            ? 
            `Thank you for your payment of amount ${searchParams.amount}`
            :
            "Payment failed"
            }   
            
        </div>
    );
}