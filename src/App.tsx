import './App.css'
import Body from './Pages/Body'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
// import PullRequest from './Pages/PullRequest'
import SubHeader from './Pages/SubHeader'

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      {/* <PullRequest/> */}
      <Body />
      <Footer />
    </>
  )
}

export default App
