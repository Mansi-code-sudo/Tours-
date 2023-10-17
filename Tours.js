import Card from './Card'

function Tours({tours,deleteHandler}){
    return (<div>
        <div><h2>Plan With Love</h2></div>
        <div>
            {
                tours.map((tour)=>{
                    return <Card {...tour} deleteHandler={deleteHandler}></Card>
                })
            }
        </div>
    </div>)
}

export default Tours;