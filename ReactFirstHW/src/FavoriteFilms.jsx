import React from 'react'

const FavoriteFilms = () => {
  return (
    <div className="post-card">
        <h3>Мої улюблені фільми</h3>
        <ol>
            <li>interstellar</li>
            <img src="./src/images/interstellar.jpg" alt="" />
            <button>Детальніше</button>
            <li>matrix</li>
            <img src="./src/images/matrix.png" alt="" />
            <button>Детальніше</button>
        </ol>
    </div>
  )
}

export default FavoriteFilms