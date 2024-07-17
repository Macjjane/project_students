
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer/footer';

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 
  };

  return (
    <>
      <Header />
      <Slider {...settings}>
        <div>
          <img src="/estudantes-1.jpg" alt="Estudante 1"  />
        </div>
        <div>
          <img src="/estudantes-2.jpg" alt="Estudante 2" />
        </div>
        <div>
          <img src="/estudantes-3.jpg" alt="Estudante 3" />
        </div>
      </Slider> 


      <div className='flex gap-48 mt-12'> 
      <div className='font-semibold mt-4 mb-4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     <p>Culpa quos totam voluptatibus consequuntur facilis, </p>  
     <p> aspernatur officiis cupiditate quas corrupti facere nihil explicabo, tempora adipisci dicta,</p> 
     <p>iste ipsum ad harum obcaecati.</p> 
     </div>
      <div className='font-semibold mt-4 mb-4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     <p>Culpa quos totam voluptatibus consequuntur facilis, </p>  
     <p> aspernatur officiis cupiditate quas corrupti facere nihil explicabo, tempora adipisci dicta,</p> 
     <p>iste ipsum ad harum obcaecati.</p> 
     </div>
      <div className='font-semibold mt-4 mb-4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
     <p>Culpa quos totam voluptatibus consequuntur facilis, </p>  
     <p> aspernatur officiis cupiditate quas corrupti facere nihil explicabo, tempora adipisci dicta,</p> 
     <p>iste ipsum ad harum obcaecati.</p> 
     </div>
     </div>
     <Footer />
    </>
  );
};

export default Home;
