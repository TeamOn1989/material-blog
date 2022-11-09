import s from './index.module.css'


function Container({ children }) {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
}

export default Container;
