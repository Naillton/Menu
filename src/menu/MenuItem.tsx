import './MenuItem.css'

type MenuItemProps = {
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
};

export function MenuItem({ nome, descricao, preco, imagem}: MenuItemProps) {
    return(
        <>
            <div className="menu-item">
                <div className='menu-top'>
                    <h2 className="menu-nome">{nome}</h2>
                    <img
                        src={imagem}
                        alt={nome}
                        className="menu-imagem"
                    />
                </div>
                <div className='menu-bot'>
                    <p className="menu-descricao">{descricao}</p>
                    <p className="menu-preco">Preço: R$ {preco}</p>
                </div>
            </div>
        </>
    )
}