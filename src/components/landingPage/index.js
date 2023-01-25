import './style.scss';
import logo from '../../assets/logo.png';
import video from '../../assets/video.mp4';
import Contact from '../Contact';


export default function LandingPage(){

    return <div className="containerLanding">
    <main className="signup-container">
      <div className="heading-primary"><img
          className="logo-image"
          src={logo}
          alt="logo"
        /></div>
      <p className="text-mute">Essayez-le dès
maintenant en participant à notre version beta !</p>
   
      <Contact/>
    
    </main>


    <div className="welcome-container">
      <h1 className="heading-secondary">Welcome to  <br></br><span className="lg"> Adaptative Resume !</span>  </h1>
        <div className='accroche'>
          
          <p><strong>Créez des CV personnalisés</strong> pour chaque opportunité.<br key={1}></br> 
<p><strong>Augementez vos chances de succès</strong> en proposant des réponses personnalisées à chaque appel d'offres!</p>
<p>Utilisez notre outils pour <strong>sélectionner les experiences les plus representatives </strong>pour chaque projet. </p>
</p>
</div>
 <div className="videoContainer">
				<video src={video} type="video/mp4" controls={true} width="100%" height="100%"/>
			</div>

      </div>

      
     

  </div>
}



