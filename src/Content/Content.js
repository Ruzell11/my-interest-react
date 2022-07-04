import React from 'react';
import game from './videogame.jpg';
import movie from './movie.jpg';
import music from './music.jpg';

function Content(){
    return(
        <>
        <div className='d-flex content justify-content-center align-items-center flex-column mt-5'>
          <h1 className='fw-bolder '>Hello Im Ruzell</h1> 
          <h3 className='fw-bold'>Know more about me</h3> 
          <img src='https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Arrow-Down-PNG-Transparent-Image.png' className='imgArrow mt-2'/>
        </div>
        <div className='mainContent mt-5 '>
          <h1 className='px-2 fw-bold heading'>My Interest Are</h1>
          <div className='mainContent1 my-2 d-flex justify-content-between align-items-center'>
          <img  src={game} className='img-content p-3' />
          <div className='mainContent1-body'>
            <h1 className='fw-bolder'>
              PLAY ONLINE GAMES
            </h1>
            <p>
              Cras sit amet nibh libero, in gravida nulla.
              Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus</p>
          </div>
        </div>
          <div className='mainContent1   my-2 d-flex justify-content-between align-items-center'>
          <img  src={movie} className='img-content p-3' />
          <div className='mainContent1-body'>
            <h1 className='fw-bolder'>
              WATCH MOVIE
            </h1>
            <p>
              Cras sit amet nibh libero, in gravida nulla.
              Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus</p>
          </div>
          </div>
          <div className='mainContent1  my-2  d-flex justify-content-between align-items-center'>
          <img  src={music} className='img-content p-3' />
          <div className='mainContent1-body'>
            <h1 className='fw-bolder'>
              LISTENING TO MUSIC
            </h1>
            <p>
              Cras sit amet nibh libero, in gravida nulla.
              Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus</p>
          </div>
          </div>
        </div>
        
        </>
    )
}

export default Content;