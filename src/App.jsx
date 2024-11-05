import Header from './components/Header'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import PorfolioIdx from './pages/PortfolioIdx'
import PageDetail from './pages/PageDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PorfolioHome from './pages/PortfolioHome'
import Carrousel from './components/Carrousel'
import ContactUs from './pages/ContactUs'
import data from './data/projects.json'

function App() {  
  return (
    <>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<HomePage />}/>

              <Route path='/portfolio' element={<PorfolioIdx />}>
                <Route index element={<PorfolioHome />} />
                <Route path='manage' element={
                  <PageDetail info={data.data[0]}>
                    <Carrousel info={data.data} project={'manage'}/>
                  </PageDetail>
                }/>
                <Route path='bookmark' element={
                  <PageDetail info={data.data[1]}>
                    <Carrousel info={data.data} project={'bookmark'}/>
                  </PageDetail>
                }/>
                <Route path='insure' element={
                  <PageDetail info={data.data[2]}>
                    <Carrousel info={data.data} project={'insure'}/>
                  </PageDetail>
                }/>
                <Route path='fylo' element={
                  <PageDetail info={data.data[3]}>
                    <Carrousel info={data.data} project={'fylo'}/>
                  </PageDetail>
                }/>
              </Route>
              <Route path='contact' element={<ContactUs />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
