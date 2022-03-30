import './Card.css';

const Card = ({data}) => {
    console.log(data);
    return(
        <div>
        <div className='grid-container'>
            {data.map((item)=>{
                return(
                <div className='row1'>
                    <div className="card">
                        <img src={item.image1}/>
                        <div class="container">
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
            )
            })}
        </div>
            
        </div>
    );
}

export default Card;