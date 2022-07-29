import './gallery.css'
import portfolio from "../../data/portfolio";
function Gallery(props) {
  var photos = portfolio[props.project]["gallery"]
  
  const Image = ({ data }) => <div  className='photo' align='center'><img src={`data:image/jpeg;base64,${data}`} /></div>
  const items = []

    for (const [index, value] of photos.entries()) {
      items.push(<Image key={index} data={value} />)
    }
    console.log(portfolio[props.project]["projectlink"]);
    return (
      <div style={{backgroundColor:'rgba(0, 0, 255, 0.05)'}}>
        <br/>
        <div className='button'><a href={portfolio[props.project]["projectlink"]}>View Code</a></div>
        <div className='photos'>
        {items}
        
        </div>
        <br/><br/>
   </div>
  );
}

export default Gallery;
