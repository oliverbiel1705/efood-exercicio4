import StyledFooter from './style'
import efoodLogo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <StyledFooter>
    <Link to={'/'}>
      <img src={efoodLogo} alt="Logo do efood" />
    </Link>
    <div>
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
      <img src={twitter} alt="Twitter" />
    </div>
    <p>
      A efood é uma plataforma dedicada á divulgação de estabelecimentos. A
      responsabilidade pela entrega e pela qualidade dos produtos é totalmente
      sobre o estabelecimento contratado.
    </p>
  </StyledFooter>
)

export default Footer
