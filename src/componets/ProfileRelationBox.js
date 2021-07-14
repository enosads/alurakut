import {ProfileRelationsBoxWrapper} from "./ProfileRelations";

export function ProfileRelationsBox({itens, title}){
    return (
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">{title}({itens.length})</h2>
            <ul>
                {itens.map((item) => {
                    return (
                        <li key={item.title}>
                            <a href={`/users/${item.title}`}>
                                <img src={item.image_url} alt={`${item.title}`}/>
                                <span>{item.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </ProfileRelationsBoxWrapper>
    )
}