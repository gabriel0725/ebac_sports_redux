import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { useGetProdutosQuery } from './store/apiSlice'
import { addToCart } from './store/cartSlice'
import { toggleFavorite } from './store/favoriteSlice'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Produto } from './types'

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorite.items)

  function adicionarAoCarrinho(produto: any) {
    dispatch(addToCart(produto))
  }

  function favoritar(produto: any) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
