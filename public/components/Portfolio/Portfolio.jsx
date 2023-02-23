import React from 'react'
import './Portfolio.css'

import BlogerPage from '../../assets/BlogrPage.png'
import Ecommerce from '../../assets/Ecommerce.png'
import Loading from '../../assets/Loading.png'
import SpotifyClone from '../../assets/SpotifyClone.png'
import NetFlixClone from '../../assets/NetFlixClone.png'
import loginForm from '../../assets/loginForm.png'


const Data =[
  {
    id: 1,
    image: BlogerPage,
    title: 'BlogrPage',
    github:'https://github.com/anesszereg/bloger-page.git'
  }
  ,
  {
    id: 2,
    image: Ecommerce, 
    title: 'Ecommerce',
    github:'https://github.com/anesszereg/shoping-card.git'
  }
  ,
  {
    id: 3,
    image: NetFlixClone,
    title: 'NetFlixClone',
    github:'https://github.com/anesszereg/NETFLIX.git'
  }
  ,
  { 
    id: 4,
    image: loginForm,
    title: 'LoginForm',
    github:'   https://github.com/anesszereg/Login-Form.git'
  }
  ,
  {
    id: 5,
    image:Loading,
    title: 'Loading',
    github:'https://github.com/anesszereg/dark-theme-page.git'
  }
  ,
  {
    id: 6,
    image: SpotifyClone,
    title: 'Spotify Clone',
    github:'https://github.com/anesszereg/Spotify-Clone.git'
  }
]


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio_container">
       {
          Data.map(({id , image ,title , github}) => {
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} className='portfolio-img' alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                <a href={github} className='btn'>Github</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
    
                </div>
    
              
    
            </article>
            )

       }
          )}
        </div> 

    </section>
  )
}

export default Portfolio