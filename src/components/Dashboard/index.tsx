import { Summary } from "../Summary";
import { EventsTable } from "../EventsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <EventsTable />
    </Container>
  )

}