import '../style/C_styling.css'

const C_styling = () => {
         //log
         console.log("<-------->");
         console.log("'C' component rendering");   
         console.log("<-------->");
         console.log("");
    
         //declare internal styling here as object
    const internal = {
        height: "20px",
        width: "100%",
        backgroundColor: "gold"
    }

    
    return (
        <>
            <p>__________________</p>
            <h1>I am component C - three ways of styling</h1>
            <p>__________________</p>
            
            {
            //internal
            }
            <div style={internal} >
              <p>Internal</p>
            </div>

            {
            //external class .
            }
            <div className="external">
            <p>External class</p>
            </div>
            
            {
            //external id .
            }
            <div id="externalId">
            <p>External id</p>
            </div>

            <div style = {{ backgroundColor:"lightblue", width:"100%", height: "20px"}}>
            
            {
            //inline
            }
            <p>inline</p>
            </div>

        </>
    )
}

export default C_styling