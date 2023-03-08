import React from 'react'
import './App.css'

function App() {
  return (
    <div className="Main-container">
      <div className="Card Card1">
        <div>
          <img src="https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-1156938132-800x450.jpg" alt="Desert"></img>
          <h3>Desert</h3>
          <div className='PP'><p>A desert which is usually hot</p> </div>
          <div>
            <button class="share-button">Share</button>
            <button class="explore-button">Explore</button>
          </div>
        </div>
      </div>
      <div className="Card Card2">
        <div>
          <img src="https://seec-tonko.house.gov/sites/sustainableenergyandenvironmentcoalitioncaucus.house.gov/files/styles/congress_featured_image/public/featured_image/issues/climate-change-tree.jpg?itok=n0AV8u81" alt="Forest"></img>
          <h3>Forest</h3>
          <div className='PP'><p>An environment that is dying</p> </div>
          <div>
            <button class="share-button">Share</button>
            <button class="explore-button">Explore</button>
          </div>
        </div>
      </div>
      <div className="Card Card3">
        <div>
          <img src="https://www.collinsdictionary.com/images/full/river_377603497_1000.jpg" alt="River"></img>
          <h3>River</h3>
          <div className='PP'><p>A beautiful river</p></div>
          <div>
            <button class="share-button">Share</button>
            <button class="explore-button">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;