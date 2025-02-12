import image from '../assets/IMA.png';
import ParticleBackground from './ParticleBackground';
const Aboutme = () => {
  return (
    <>

    <div className="main">
        <div className="maintop">
          <div className="profilepic">
            <img src={image} className="pict" alt="sorry Image can not be loaded" />
            <ParticleBackground />
          <div id="particles-js"></div>
          </div>
          <div className="homethings">
            <h1 className='names'>Madhur N Patel</h1>
            <h1 className='names'>Email : pmadhurn@gmail.com</h1>
            <h1 className='names'>Phone : +91 9016273812</h1>
            <h1 className='names'>
              YOU CAN FIND ME ON : 
            </h1>
            <h2 className='names'>X : <a href='https://x.com/pmadhurn'>pmadhurn</a></h2>
            <h2 className='names'>Linkedin : <a href='https://www.linkedin.com/in/madhur-n-patel'>Madhur N Patel</a></h2>
            <h2 className='names'>Github : <a href='https://github.com/pmadhurn'>pmadhurn</a></h2>
            <h2 className='names'>Skype : <a href='https://join.skype.com/invite/ufTh0NHI1fg0'>Madhur Patel</a></h2>
                        
            </div>
        </div>
      </div>      
    </>
  )
}

export default Aboutme