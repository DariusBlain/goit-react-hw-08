import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>404</h1>
      <p className={s.message}>Sorry, page not found!</p>
      <a href="/" className={s.link}>Go back to Home</a>
    </div>
  );
};

export default NotFound;