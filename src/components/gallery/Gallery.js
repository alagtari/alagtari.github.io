import Container from 'react-bootstrap/Container';
import './gallery.css'
import photo1 from '../../assets/foodapp/1.png'
import photo2 from '../../assets/foodapp/2.png'
import photo3 from '../../assets/foodapp/3.png'
import photo4 from '../../assets/foodapp/4.png'
import photo5 from '../../assets/foodapp/5.png'
import photo6 from '../../assets/foodapp/6.png'
import photo7 from '../../assets/foodapp/7.png'
import photo8 from '../../assets/foodapp/8.png'
import photo9 from '../../assets/foodapp/9.png'
 
function Gallery() {
  return (
      <div style={{backgroundColor:'rgba(0, 0, 255, 0.05)'}}>
        <br/>
        <div className='button'><a href='https://github.com/alagtari/food-app'>View Code</a></div>
        <div className='photos'>
        <div className='photo uncentred' align='center'>
          <img  src={photo1}/>
          <img  src={photo4}/>
          <img  src={photo7}/>
        </div>
        <div  className='photo' align='center'>
          <img   src={photo2}/>
          <img  src={photo5}/>
          <img  src={photo8}/>
        </div>
        <div className='photo uncentred' align='center'>
          <img   src={photo3}/>
          <img  src={photo6}/>
          <img  src={photo9}/>
        </div>
        </div>
   </div>
  );
}

export default Gallery;
