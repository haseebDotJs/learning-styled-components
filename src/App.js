import { ThemeProvider } from "styled-components"
import { Container } from "./components/styles/Container.styled"
import { GlobalStyles } from "./components/styles/Global.styled"
import Header from "./components/Header"
import Footer from "./components/Footer"
import content from "./content"
import Card from "./components/Card"
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333"
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
      <Container>
        {content.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
