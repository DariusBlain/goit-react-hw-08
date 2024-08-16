import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <section className={s.infoSection}>
        <h1 className={s.title}>Welcome to the Phonebook App</h1>
        <p className={s.description}>
          This application allows you to manage your contacts efficiently. You can add, edit, and delete contacts, 
          as well as search through them. It provides an easy-to-use interface to keep your contacts organized.
        </p>
      </section>
      <section className={s.developerSection}>
        <h2 className={s.subtitle}>About the Developer</h2>
        <p className={s.developerInfo}>
          Developed by <strong>Serhii Syrov</strong>, a passionate web developer with a love for creating user-friendly applications. 
          The goal is to build useful and intuitive tools that simplify everyday tasks. Feel free to reach out for feedback or collaboration!
        </p>
      </section>
    </div>
  );
};

export default HomePage;