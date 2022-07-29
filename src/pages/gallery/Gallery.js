import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import Fixedbtn from '../../components/fixedbtn/Fixedbtn';
import { useParams } from 'react-router-dom';
function GalleryPage() {
  const params = useParams();

  console.log(params.id);
  return (
    <div align='center'  >
      <NavBar/>
      <Gallery project={params.id}/>
      <Footer/>
      <Fixedbtn/>
    </div>
  );
}

export default GalleryPage;
