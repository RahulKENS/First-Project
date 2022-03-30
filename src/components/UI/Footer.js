import './Footer.css';
const Foote = ({item1}) => {
    console.log(item1);
    return(
        <div>
            <div class="footer">
                <footer class="py-5">
                    <div class="row">
                    <div class="col-2">
                    {item1.map((data1)=>{
                        return(
                            <>
                                <div className='cont'>
                                <h5>{data1.heading}</h5>
                                <ul class="nav flex-column" >
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{data1.list1}</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{data1.list2}</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{data1.list3}</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{data1.list4}</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">{data1.list5}</a></li>
                                </ul>
                                </div>

                            </>
                            
                            );
                    })}
                            
                    </div>

                    </div>
                </footer>
                </div>
        </div>
    );
}

export default Foote;