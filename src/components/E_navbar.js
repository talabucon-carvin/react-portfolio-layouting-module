import { Outlet, Link } from "react-router-dom";

const E_Navbar = () => {
    return (
        <>
            {
                //from bootstrap
            }
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">

                                {
                                    //from react-router
                                }
                                <Link to ="/g_tutorial1" className="nav-link active" aria-current="page" >
                                    Tutorial1
                                </Link>
                            </li>
                            <li className="nav-item">
                            
                                <Link to = "/h_portfolioContent1" className="nav-link" >
                                    Content1
                                </Link> 
                            </li>
                            <li>   
                                <Link to = "/i_portfolioContent2" className="nav-link" >
                                    Content2
                                </Link> 
                            </li>
                            <li>   
                                <Link to = "/j_portfolioContent3" className="nav-link" >
                                    Content3
                                </Link> 
                            </li>
                            <li>   
                                <Link to = "/k_portfolioContent4" className="nav-link" >
                                    Content4
                                </Link> 
                            </li>
                            <li>   
                                <Link to = "/l_portfolioContent5" className="nav-link" >
                                    Content5
                                </Link> 
                            </li>
                            <li>   
                                <Link to = "/m_portfolioContent6" className="nav-link" >
                                    Content56
                                </Link> 
                            </li>
                            
                        
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default E_Navbar