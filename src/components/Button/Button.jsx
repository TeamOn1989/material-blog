
import s from './index.module.css';
import cn from 'classnames'


function Button( {children, onClick} ) {
  return (
    <button onClick={onClick} className={cn(s.btn)}>
      {children}
    </button>
  );
}

export default Button;
