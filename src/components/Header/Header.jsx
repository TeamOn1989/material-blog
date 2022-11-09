

import Container from '../Container/Container';
import s from './index.module.css';
import cn from 'classnames'




function Header({children}) {
  return (
    <header className={cn(s.header)}>
      <Container>
      <div className={cn(s.container)}>
        {children}
      </div>
    </Container>
    </header>    
  );
}

export default Header;
