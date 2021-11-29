import {useState, FormEvent, useEffect} from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'

import { Container } from './styles'

import api from '../../Services/api'


interface NewInclusionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
 
export function NewEventsModal({ isOpen, onRequestClose }: NewInclusionModalProps ){
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [local, setLocal] = useState('')
  

  async function handleCreateNewEvent(event: FormEvent){
    event.preventDefault();
    const data = {
      title,
      local,
      date
    }

    await api.post('/events', data)
    
    setTitle ('')
    setLocal('')
    setDate('')
  }

    return(
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="reactModalOverlay" className="reactModalContent">        
        <Container>
          <button type="button" onClick={onRequestClose} className="reactModalClose">
            <img src={closeImg} alt="Fechar Modal" />
          </button>

          <Container onSubmit = {handleCreateNewEvent}>
            <h2>Cadastrar Evento</h2>

            <input placeholder="Título" type="text" value = {title} onChange = {event => setTitle(event.target.value)}/>
            <input placeholder="Local" type="text" value = {local} onChange = {event => setLocal(event.target.value)}/>
            <input placeholder="Data" type="text" value = {date} onChange = {event => setDate(event.target.value)}/>

            <button type="submit">Postar</button>
          </Container>
        </Container>
      </Modal>
    )
}