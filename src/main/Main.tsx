import { MenuItem } from '../menu/MenuItem'
import menuData from '../data/Data'
import { useMenu } from '../state/useMenu'
import './Main.css'

export default function Main() {
    const { isOpen, toggleMenu } = useMenu();

    return (
        <>
            <main>
                {menuData.map((categoria, index) => (
                    <div key={categoria.tipo} className='card'>
                        <div
                        className="card-principal"
                        onClick={() => toggleMenu(index)}
                        >
                        <span>{categoria.tipo}</span>
                        {categoria.icone}
                        </div>
                        {
                            isOpen === index && (
                            <div className='card-secundario'>
                                {categoria.itens.map((item) => (
                                <MenuItem
                                    key={item.nome}
                                    nome={item.nome}
                                    descricao={item.descricao}
                                    preco={item.preco}
                                    imagem={item.imagem}
                                />
                                ))}
                            </div>
                            )
                        }
                    </div>
                ))}
            </main>
        </>
    )
}