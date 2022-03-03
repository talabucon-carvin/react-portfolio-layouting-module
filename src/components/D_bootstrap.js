const D_bootstrap = () => {
    
        //log
        console.log("<-------->");
        console.log("'D' component rendering");   
        console.log("<-------->");
        console.log("");
    
    
    return (
        <>
            <p>__________________</p>
            <h1 style={{ textAlign:"center" }}>I am component D - Bootstrap: three columns, container, cards</h1>
            <p>__________________</p>
            
            {//container, apply className as JSX rule
            }
            <div className="container-fluid">
                <div className="row">
                    {//column 1
            }
                    <div className="col">
                        
                        {//cards, apply jsx inline style
            }
                        <div className="card" style={{width: "18rem" ,margin:"auto"}}>

                            {
                                //self close img tags
                            }
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {//column 2
            }
                    <div className="col">
                        <div className="card" style={{width: "18rem", margin:"auto"}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    <div className="col">
                    {//column 3
            }
                    <div className="card" style={{width: "18rem", margin:"auto"}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )


}

export default D_bootstrap

