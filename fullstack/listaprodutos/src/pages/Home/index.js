import { useEffect, useState } from "react"
import db from '../../context/auth'

import Search from "../../component/Search"
import List from "../../component/List"
import Brands from "../../component/Brand"

export default function Home(){
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [qtdItens, setQtdeItens] = useState(0)
    const [selectedBrand, setSelectedBrand] = useState('')
    const [marcas, setMarcas] = useState([])

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchPress = (e) => {
        if (e.key === 'Enter'){
            const filteredProducts = db.filter(tenis => {
                if(tenis.Nome.includes(search) || tenis.Marca.includes(search))
                {
                    return true
                }
                return false
            })
            setProducts(filteredProducts)
            contadorQuantidade()
        }
    }

    const handleSelectedBrand = (brand) => {
        setSelectedBrand(brand)
        const filtredProducts = db.filter(tenis => {
            if(tenis.Marca === selectedBrand)
            {
                return true;
            }
            return false
        })
        setProducts(filtredProducts)
        contadorQuantidade()
    }

    function marcasDisponiveis(){
        const marcasUnicas = [];
        db.filter(tenis => {
        if (!marcasUnicas.includes(tenis.Marca)) {
            marcasUnicas.push(tenis.Marca);
        }
        });

        setMarcas(marcasUnicas)
    }

    function contadorQuantidade(){
        let count = 0
        for (const item of products) {
            count++
        }
        console.log(count)
        setQtdeItens(count)
    }

    useEffect(() => {
        async function PreencheProdutos(){
            setProducts(db)
            contadorQuantidade()
            marcasDisponiveis()
        }

        PreencheProdutos()
    }, [])

    return(
        <div>
            <Search name={search} onchange={handleSearchChange} onkeydown={handleSearchPress}/>
            <div>
                <h1 className="text-5xl font-bold drop-shadow-xl px-10">Tênis</h1>
                <h2 className="text-xl px-10">{qtdItens} produtos encontrados</h2>
            </div>
            <Brands names={marcas} onchange={handleSelectedBrand} selected={selectedBrand} />
            <List produtos={products} qtd={qtdItens} />
        </div>
    )
}