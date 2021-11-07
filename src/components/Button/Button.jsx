import styles from './Button.module.css';

export const Button = props => {

  const cls = [
    styles.btn,
    styles[props.color]
  ]
  return (
    <button className={cls.join(' ')}>{props.children}</button>
  )
}