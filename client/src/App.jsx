import './styles.css';
import linkedin from './assets/linkedin_logo.png';
import whatsapp from './assets/whatsapp_logo.png';
import github from './assets/github_logo.png';
import gmail from './assets/gmail_logo.png';
function App() {

  const cube_styles = [
    { background: 'linear-gradient(90deg, #ff7eb3, #ff758c)' },
    { background: 'linear-gradient(90deg, #00f0ff, #007fff)' }, 
    { background: 'linear-gradient(90deg, #39ff14, #00ff00)' },
    { background: 'linear-gradient(90deg, #ffffff, #e0e0e0)' },
    { background: 'linear-gradient(90deg, #ff073a, #ff5f5f)' },
    { boxShadow: '0px 0px 100px #007fff' },
    { boxShadow: '0px 0px 100px #00ff00' },
    { boxShadow: '0px 0px 100px #e0e0e0' },
    { boxShadow: '0px 0px 100px #ff5f5f' }
  ];
  const cube_element  = (imgsrc,imgstyle,imgshadow) => {
        const bottom_style = {...imgstyle, ...imgshadow};
        return(
        <div className="cube">
          <div className="face front" style={imgstyle}></div>
          <div className="face back" style={imgstyle}></div>
          <div className="face left" style={imgstyle}></div>
          <div className="face right" style={imgstyle}></div>
          <div className="face top" style={imgstyle}><img src={imgsrc}></img></div>
          <div className="face bottom" style={bottom_style}></div>
        </div>);
  };

  return (
    <div>
      <div className="App">
      <div className="region1">
        <h1>Hello! I am <span>Aditya Pillai</span></h1>
        <p>Feel free to browse my portfolio</p>
      </div>
      <div className="region2">
        {cube_element(linkedin,cube_styles[1],cube_styles[5])}
        {cube_element(whatsapp,cube_styles[2],cube_styles[6])}
        {cube_element(github,cube_styles[3],cube_styles[7])}
        {cube_element(gmail,cube_styles[4],cube_styles[8])}
      </div>
    </div>
    </div>
  )
}

export default App
