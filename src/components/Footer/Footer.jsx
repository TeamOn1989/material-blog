
import s from './index.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <Logo classnameImg={s.logo} classnameLink={s.link}/>
          <p className={s.property}>
            Материал блог ©. Все права защищены
          </p>
        </div>        
      </Container>
    </footer>
  );
}

export default Footer;
