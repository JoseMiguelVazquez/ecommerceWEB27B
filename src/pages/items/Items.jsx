import { useEffect, useState} from 'react'
import { getAllItems } from '../../services/itemServices'
import './Items.scss'

export default function Items() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllItems()
        .then(response => {
            setItems(response.data)
            setLoading(false)
        })
        .catch((error) => console.error(error.message))
    }, [])

  if(loading){
    return <h1>Cargando</h1>
  }

  return (
    <section className='items-container'>
        <div className='items'>
            {items.map(item => (
                <div key={item.id} className='item'>
                    <img src={item.image} />
                    <h3>{item.product_name}</h3>
                    <p>{item.price}</p>
                </div>
            ))
}
        </div>
    </section>
  )
}
