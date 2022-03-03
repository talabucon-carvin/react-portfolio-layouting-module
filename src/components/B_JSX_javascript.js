const B_JSX_javascript = () => {
     //log
     console.log("<-------->");
     console.log("'B' component rendering");   
     console.log("<-------->");
     console.log("");


    //initialize a values
    let variable1 = "I am a variable"
    
    const imaFunction1 = () => {
        return "I am a function call"
    }
    
    const htmlParagraph1 = <p>I am an html content</p>

    let combo1 = <p>I am the combo1 and added variable1: {variable1}</p>
    let combo2 = <p>I am the combo2 and added imaFunction1: {imaFunction1()}</p>

    return(
   
        <>
            <p>__________________</p>
            <h1>Component B - JSX and javascript</h1>
            
            <div>
                {
                //render value of variable
                variable1
                }
            </div>
            <div>
                
                {
                //render value
                imaFunction1()
                }
            </div>
            <div>
                {
                //render html content
                htmlParagraph1
                }
            </div>
            <div>
                {
                //render combo1
                combo1
                }
            </div>
            <div>
                {
                //render combo2
                combo2
                }
            </div>
            <p>__________________</p>
        </>

    //view here
    )
}

export default B_JSX_javascript