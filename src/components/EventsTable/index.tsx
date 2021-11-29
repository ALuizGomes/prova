import { useState, useEffect } from "react";

import { Container } from "./styles";

import api from '../../Services/api'

interface IEvents{
  title: string
  date: string
  local: string
}

export function EventsTable() {
  const [events, setEvents] = useState<IEvents[]>([])

  useEffect(() =>{
    api.get('events')
      .then(response => setEvents(response.data))
  }, [] )

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Local</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

            {events.map(evento => (
              <tr>
                <td>{evento.title}</td>
                <td>{evento.local}</td>
                <td>{evento.date}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </Container>
  )
}