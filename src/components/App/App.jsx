
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './index.module.css'
import './index.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import {ReactComponent as IconAdd} from '../../assets/images/plus-solid.svg'
import PostList from '../PostList/PostList';
import { postData } from './posts.js'
import GridContainer from '../GridContainer/GridContainer';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import Container from '../Container/Container';



function App() {
  

  const [cards, setCards] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(12)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = postData.slice(firstCardIndex, lastCardIndex)

  useEffect(() => {  
    setCards(cards)    
  },[])

  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  

  const handleClick = () => {
    console.log('Все работает');
  }
  return (
    <>
      <Header>
        <Logo/>
        <Button onClick={handleClick}>
          <IconAdd className={s.icon}/>
          <span>Add post</span>          
        </Button> 
      </Header>      
      <main className={s.main}>
        <Container>
          <Pagination cardsPerPage={cardsPerPage} allCards={postData.length} paginate={paginate}/>
        </Container>
        <GridContainer>
          <PostList posts={currentCards}/>          
        </GridContainer>        
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
