import './style.scss';
import logo from '../../assets/logo.png';
import video from '../../assets/video.mp4';
import { onPressSignUp } from '../utils/form';

export default function LandingPage(){

    return <div className="container">
    <main className="signup-container">
      <div className="heading-primary"><img
          className="logo-image"
          src={logo}
          alt="logo"
        /><span className="span-blue"></span></div>
      <p className="text-mute">Enter your credentials to access your account.</p>
   
  
      <form className="signup-form">
        <label className="inp">
          <input type="email" className="input-text" placeholder="&nbsp;"/>
          <span className="label">Email</span>
          <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
        </label>
        <label className="inp">
          <input type="password" className="input-text" placeholder="&nbsp;" id="password"/>
          <span className="label">Password</span>
          <span className="input-icon input-icon-password" data-password><i className="fa-solid fa-eye"></i></span>
        </label>
        <button  className="btn btn-login">Login</button>
      </form>
      {/* <p className="text-mute">Not a member? <a href="$">Sign up</a></p> */}
      <p>Pour participer à la version beta. Cliquez ici ! 
      <button onClick={onPressSignUp} >Sign up</button></p>
    </main>
    <div className="welcome-container">
      <h1 className="heading-secondary">Welcome to  <br></br><span className="lg"> Adaptative Resume !</span>  </h1>
        <div><p>Créez des CV personnalisés pour
chaque opportunité et augmentez vos chances de succès. </p>
<p>Essayez-le dès
maintenant en participant à notre version beta !</p><br></br></div>
 <div className="videoContainer">
				<video src={video} type="video/mp4" controls="true" width="100%" height="100%"/>
			</div>

      </div>

      
     

  </div>
}



