import './Loader.css';

//Loader уверенно позаимствован с https://loading.io

export const Loader = () => {
  return (
    <div className="wrapper">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}