
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useSearch } from './hooks/useSearch.js'





function App() {

  const { search, UpdateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    UpdateSearch(event.target.value)
  }


  return (

    <div className='Page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Matrix, Star Wars, Iron man...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }} >{error}</p>}

      </header>


      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />

        }
      </main>
    </div>
  )
}

export default App
