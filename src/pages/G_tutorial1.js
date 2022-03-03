import A_boilerplate from "../components/A_boilerplate"
import B_JSX_javascript from "../components/B_JSX_javascript"
import C_styling from "../components/C_styling"

const G_tutorial1 = () => {
    return (
        <>
            <div className="container-fluid" style={{ height: "100%", width:"100%"}} >
                <A_boilerplate/>

                <B_JSX_javascript/>

                <C_styling/>
            </div>
        </>
    )
}

export default G_tutorial1