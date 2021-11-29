import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewEventsModal } from './components/EventsModal';
import { GlobalStyle } from './styles/global'

export function App() {

  // useState - hook
  // const [nomeDoEstado, funcaoParaAlterarOEstado] = useState
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />    

      <NewEventsModal

        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        
      />

      <GlobalStyle />
    </div>
  );
}
