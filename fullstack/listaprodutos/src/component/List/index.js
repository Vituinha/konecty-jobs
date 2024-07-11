export default function List(props){
    return(
        <div className="flex justify-center max-w-full">
            <div className="h-56 grid grid-cols-2 md:grid-cols-4 gap-4 content-start ...">
                {props.qtd > 0 ?
                    props.produtos.map((item, index) => {
                        return(
                            <div className="container mx-auto px-4 bg-white rounded-lg" key={index}>
                                <img src={item.Imagem} className="min-w-80 max-w-80 min-h-80 max-h-80"/>
                                <h2 className="text-xl px-5 mb-2">{item.Marca}</h2>
                                <h3 className="text-md dark:text-neutral-400 mb-2 px-5">{item.Nome}</h3>
                                <h4 className="text-lg px-5 mb-5">{item.Preco}</h4>
                            </div>
                        )
                    })
                :
                <div>
                    <h1 className="text-5xl font-bold drop-shadow-xl px-10">Sem itens encontrados</h1>
                </div>
                }
            </div>
        </div>
    )
}