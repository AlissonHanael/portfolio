import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Seu Nome</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Assunto</label>
        <input type="text"></input>
        <label>Sua Mensagem</label>
        <textarea rows="6" placeholder="Digite sua mensagem aqui!"></textarea>
        <button className="btn">Enviar</button>
        <div className="whatsapp">
          <label>Ou se preferir</label>
          <a href="https://wa.me/5546999037458?" className="btn">
            Entre em contato pelo Whatsapp
          </a>
        </div>
      </form>
    </div>
  )
}

export default Form
