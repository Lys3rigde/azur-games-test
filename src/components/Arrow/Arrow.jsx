import arrow from './Arrow.svg';
import './Arrow.css'


export const Arrow = ({ activeArrow }) => {
  return (
    <div>
      <img className={`arrow ${activeArrow}`} src={arrow} alt="#" />
    </div>
  )
}