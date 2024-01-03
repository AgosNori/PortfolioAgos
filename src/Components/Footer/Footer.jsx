import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <p >Agostina Gisel Noriega © 2023</p>
            <div className="social">
                <ul>
                   
                    <li><a href="#"><img src="./discord_icon_195948.png" alt="" /></a></li>
                    <li><a href="#"><img src="./fb_icon-icons.com_65434.png" alt="" /></a></li>
                    <li><a href="#"><img src="./slack_black_logo_icon_147081.png" alt="" /></a></li>
                    <li><a href="#"><img src="./telegram_icon_131945.png" alt="" /></a></li>
                    <li><a href="#"><img className="red" src="./whatsapp-logo_icon-icons.com_57054.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer