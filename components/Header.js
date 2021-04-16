import PropTypes from 'prop-types';
import { FaCode } from "react-icons/fa";

const People={
    'header':'Abe',
    'p': 'Will write efficient and clean code, will not sleep until he squashes all your bugs'
}
const Abe={
    'header':'Abe',
    'p':'Professional Software Development since 2016'
}
const handleKeyPress=(e, callback)=>{
    if(e.key === 'Enter'){
        callback()
    }
}
const Header = (props) => (

    <header id="header" style={props.timeout ? { display: 'none' } : {}}> 
        <div id="" onClick={()=>props.isDrawing()} className="logo glowButton" tabIndex={0} onKeyPress={handleKeyPress, props.isDrawing}>
            {/*<span className="icon fa-diamond"></span>*/}
            <div>
            <div className="text-wrap">
            <span style={{transform:'rotate(-35deg)'}}>P</span>            
            <span style={{transform:'rotate(-12deg)'}}>u</span>
            <span style={{transform:'rotate(12deg)'}}>s</span>
            <span style={{transform:'rotate(35deg)'}}>h</span>       
            </div>

            <FaCode id="codeButton" style={props.draw? {transform: 'rotateX(3.142rad)'}:{}}/>
            </div>
 
        </div>
        <div className="content">
            <div className="inner">
                <h1>Javascript, React.js, PHP</h1>
                <h2>{!props.draw&&!props.isArticleVisible?People['header']:Abe['header']}</h2>
                <p>{!props.draw&&!props.isArticleVisible?People['p']:Abe['p']}</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('certifications') }}>Certifications</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
