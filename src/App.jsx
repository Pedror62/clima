import { useState } from 'react'
import './App.css'
import { clickbnt } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const key = "8789e7428d66c497cadba925c3174f51";

  function dadosIntela(dados) {
    console.log(dados)
    document.querySelector('.city').innerHTML = dados.name;
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector('.textPrevisao').innerHTML = dados.weather[0].description;
    document.querySelector('.umid').innerHTML = dados.main.humidity + "%  De Unindade do Ar";
    document.querySelector('.imagPrevisao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  }


  async function buscarcitesbnt(cityes) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityes}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    dadosIntela(dados);


    console.log(dados)
  }


  function clickbnt() {
    const cityes = document.querySelector(".text").value;
  
    buscarcitesbnt(cityes)
   
   
  }

  
  // const buttonLupa = document.getElementsByClassName('buttonLupa');


  buttonLupa.addEventListener("click", () => {
    console.log("apertou")
  });


  // function lond() {
  //   const buttonLupa = document.getElementsByClassName('buttonLupa')
  //   buttonLupa.addEventListener("click", () => {
  //     console.log("apertou")
  //   });

  //   lond() 
  // }





  return (
    <>

        <div className='App'>
          <h1 className='fora'>Previsão do tempo</h1>
          <div className='container'>

            <div className='content'>
              <h1>Consultar Clima</h1>
              <input type="text" className='text' placeholder='Digite Sua Cidade...' required />
              <button className='buttonLupa' onClick={clickbnt}>
                <i className="fa-solid fa-magnifying-glass" ></i>
              </button>

              <div className='results' >

                <h1 className='city'>Tempo em...</h1>
                <p className='temperatura'></p>

                <div className='resultTemp'>
                  <img className="imagPrevisao" src="https://openweathermap.org/img/wn/04n.png" alt="icon-tempo" />
                  <p className='textPrevisao'></p>
                </div>

                <p className='umid'>unidade...</p>

              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default App
