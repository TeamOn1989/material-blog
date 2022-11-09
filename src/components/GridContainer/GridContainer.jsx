import s from './index.module.css'


function GridContainer({ children }) {
  return (
    <div className={s.container}>
      {children}
    </div>
  );
}

export default GridContainer;
