import styles from './App.module.css';

const App = props => {
  const { children } = props;
  return (
    <div className={styles.app}>
      {children}
    </div>
  )
}

export default App;