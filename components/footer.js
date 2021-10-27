import Image from 'next/image'
import footerStyles from '../styles/footer.module.css'


export default function Footer(){
    return(
        
        <footer id={footerStyles.footer}>

            <div className={footerStyles.footerclass}>

                <div class="padding-top-50">
                    <a className="navbar-brand" href="#">
                    <Image 
                        src="/images/logo.png" 
                        alt="FurniFuture" 
                        height="100"
                        width="100%" />
                    </a>
                </div>

                <div className="padding-top-50">
                    <h3>MEIE TOOTED</h3>
                    <a href="#">Elutuba</a><br/>
                    <a href="#">Magamistuba</a><br/>
                    <a href="#">Kontor</a><br/>
                    <a href="#">Köök</a><br/>
                    <a href="#">Vannituba</a><br/>
                    <a href="#">Sisekujundus</a>
                </div>

                <div className="padding-top-50">
                    <h3>OLULINE TEAVE</h3>
                    <a href="#">Privaatsuspoliitika</a><br/>
                    <a href="#">Tingimused</a>
                </div>

                <form id="contact_form" className="padding-top-50">
                    <h3>KONTAKT</h3><br/>
                    <p><strong>FurniFuture laohoone</strong></p>
                    <p><strong>E-R 10.00-18.00</strong></p>
                    <p><strong>L 10.00-16.00</strong></p>
                    <p><strong>P suletud</strong></p>
                    <p>(Address)</p>
                    <p>ladu@furnifuture.ee</p>
                    <p>Tel : +372 (Number)</p>
                    <p><strong>Üldinfo :</strong></p>
                    <p>+372 (Number)</p> 
                    <p>info@furnifuture.ee</p>
                </form>
            
            </div> 

        </footer>
  
    )
}
