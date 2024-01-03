
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: false, // Configura para que el carrusel sea horizontal
        centerMode: true, // Centra las imágenes
        centerPadding: '0', // Espaciado lateral (ajústalo según sea necesario)
    };

    return (
        < div className='skills'>
            <h2>Tengo conocimientos </h2>
            <div className='carousel-container'>

                <Slider {...settings}>

                    <div>
                        <img src="./bootstrap_plain_logo_icon_146619.png" width="20%"/>
                    </div>
                    <div>
                        <img src="./express_original_wordmark_logo_icon_146528.png"width="20%" />
                    </div>
                    <div>
                        <img src="./file_type_css_icon_130661.png"width="20%" />
                    </div>
                    <div>
                        <img src="./figma_logo_icon_171159.png"width="20%" />
                    </div>
                    <div>
                        <img src="./canva_logo_icon_168459.png"width="20%" />
                    </div>
                    <div>
                        <img src="./file_type_ejs_icon_130626.png"width="20%" />
                    </div>
                    <div>
                        <img src="./file_type_git_icon_130581.png"width="20%" />
                    </div>
                    <div>
                        <img src="./file_type_html_icon_130541.png"width="20%" />
                    </div>
                    <div>
                        <img src="./file_type_js_official_icon_130509.png"width="20%" />
                    </div>
                    <div>
                        <img src="./github-logo_icon-icons.com_73546 (1).png"width="20%" />
                    </div>
                    <div>
                        <img src="./mysql_original_wordmark_logo_icon_146417.png" width="20%"/>
                    </div>
                    <div>
                        <img src="./node_icon_196185.png" />
                    </div>
                    <div>
                        <img src="./python_18894.png" />
                    </div>
                    <div>
                        <img src='./react_original_wordmark_logo_icon_146375.png' />
                    </div>

                </Slider>
            </div>


        </div>

    );
};

export default Carousel;
