import { useEffect, useState } from 'react';
import Form from './components/Form'

export default function App() {
  const [cep, setCep] = useState({
    cep: "",
    localidade: "",
    uf: "",
    bairro: "",
    logradouro: ""
  })
  
  useEffect(
    () => {
      fetch(`https://viacep.com.br/ws/${cep.cep}/json/`)
        .then(response => response.json())
        .then(data => setCep(data))
    }, [cep.cep.split("").length >= 8])

  function handleChange(event) {
    const {name, value} = event.target

    setCep(prevCep => {
      return {
        ...prevCep,
        [name]: value
      }
    })
  }

  return (
    <div className="App">
      <Form 
        dados={cep}
        handle={handleChange}
      />
    </div>
  );
}
