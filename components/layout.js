import styles from './layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './header.js'
import Footer from './footer.js'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Gallery from './gallery.js';


export default function Layout(){
    return(
        <div>
            <Head>
                <title>FurniFuture</title>
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                    crossorigin="anonymous">
                </link>
                <script 
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
                    crossorigin="anonymous">
                </script>
            </Head>


            <Header></Header>


            <main>

                <div style={{height: "calc(100vh - 70px)", overflow: "hidden"}}>
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/living-room.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/dog_couch.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                    </Carousel>
                </div>

                    <Container>
                        
                        <Gallery></Gallery>

                        <div className={styles.gallerymargin}>
                            <div className="about-section padding-top-50">
                                <h1 id="">Meie liikmed</h1> {/*style="text-align:center*/}
                                <p>&nbsp;</p>
                                <div className="row row-cols-1 row-cols-md-4 g-4">
                                    <div className="col">
                                        <div className="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Harri"/>
                                            <div className="container">
                                                <h2>Harri Liimann</h2>
                                                <p className="title">Arhitekt</p>
                                                <p>harri.liimann@furnifuture.com</p>
                                                <p><button className="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>              
                                                
                                    <div className="col">
                                        <div className="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Andres"/>
                                            <div className="container">
                                                <h2>Andres Tammistu</h2>
                                                <p className="title">Analüütik</p>
                                                <p>andres.tammistu@furnifuture.com</p>
                                                <p><button className="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="col">
                                        <div className="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Ingela"/>
                                            <div className="container">
                                                <h2>Ingela Rohusaar</h2>
                                                <p className="title">Programmeerija</p>
                                                <p>ingela.rohusaar@furnifuture.com</p>
                                                <p><button className="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    
                                    <div className="col">
                                        <div className="card contactcard h-100">
                                            <Image 
                                                src="/images/icon.jpg" 
                                                width="100%"
                                                height="100%"
                                                alt="Rasmus"/>
                                            <div className="container">
                                                <h2>Rasmus Sokk</h2>
                                                <p className="title">Programeerija praktikant</p>
                                                <p>rasmus.sokk@furnifuture.com</p>
                                                <p><button className="button">Contact</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div id="popup-form">
                                    <h1>LOGI SISSE</h1>
                                    <form>
                                        <label for="email">Email</label><br/>
                                        <input type="email" name="email"><br/><br/>
                                        <label for="parool">Parool</label><br/>
                                        <input type="password" name="parool"><br/><br/>
                                        <input type="submit">
                                    </form>
                                    <button>Või registreeri</button>
                                </div>
                            
                                <div className="padding-top-50">
                                <h1 id="tooted" href="#tooted" style="text-align:center">Meie Tooted</h1>
                                <div style="padding:75% 0 0 0;position:relative;">
                                        <iframe src="https://player.vimeo.com/video/611482353?h=ce441b7891&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay:1" 
                                            frameborder="0" 
                                            allow="autoplay; fullscreen; picture-in-picture" 
                                            allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:50%;align-content: center;" 
                                            title="Trailer.mp4">
                                        </iframe>
                                    </div><script src="https://player.vimeo.com/api/player.js"></script>
                                </div>
                            
                            
                                {/* <script>
                                    function open_form(){
                                        document.getElementById("popup-form").style.display ="block";
                                        //document.body.style.opacity = 0.5;
                                    }
                                </script> */} 
                                

                        </div>
                    </Container>
            </main>


            <Footer></Footer>

        </div>
    )
}
