import reactdom from "react-dom/client"
import "./style.css"
import one from "./img/nature1.jfif"
import two from "./img/nature2.jfif"
import three from "./img/download.jfif"
import four from "./img/download-3.jfif"

const root = reactdom.createRoot(document.getElementById("root"))
function Img1() {
    return(
<div>
    <div className="picfol1">
        <h1 className="topic">IMAGE GALLERY</h1>
        <div className="border">
          <div className="one">
            <img src={one}  alt="pic1"/>
            <h2>Greenlead Hut</h2>
          </div>
          <div className="one">
            <img src={two}  alt="pic1"/>
            <h2>Mountain Scenery</h2>
          </div>
             <div className="one">
                <img src={three}  alt="pic1"/>
                <h2>Sangla Valley</h2>
             </div>
             <div className="one">
                <img src={four}  alt="pic1"/>
                <h2>Mountain Scenery</h2>
             </div>
        </div>
    </div>
    <div className="picfol2">
        <div className="border">
          <div className="one">
            <img src={four}  alt="pic1"/>
            <h2>Mountain Scenery</h2>
          </div>
          <div className="one">
            <img src={one}  alt="pic1"/>
            <h2>Greenlead Hut</h2>
          </div>
             <div className="one">
                <img src={three}  alt="pic1"/>
                <h2>Sangla Valley</h2>
             </div>
             <div className="one">
                <img src={two}  alt="pic1"/>
                <h2>Mountain Scenery</h2>
             </div>
        </div>
    </div>
</div>
    )
}

root.render(<div>
    <Img1></Img1>
</div>)
