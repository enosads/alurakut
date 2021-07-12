import {Box} from '../componets/Box'
import {MainGrid} from '../componets/MainGrid'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from "../componets/ProfileRelations";
//
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


export default function Home() {
    const pessoasFavoritas = [
        'omariosouto',
        'diego3g',
        'diogojustino',
        'maykbrito',
        'filipedeschamps',
        'akitaonrails'
    ]

    return (
        <>
            <AlurakutMenu/>
            <MainGrid>
                <div className="profileArea" style={{gridArea: 'profileArea'}}>
                    <Box>
                        <img src="https://github.com/enosads.png" alt="Foto perfil"/>
                    </Box>
                </div>
                <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
                    <Box>
                        <h1 className="title">Bem vindo(a)</h1>
                        <OrkutNostalgicIconSet/>
                    </Box>
                </div>
                <div style={{gridArea: 'profileRelationsArea'}}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">Pessoas da comunidade ({pessoasFavoritas.length})</h2>
                        <ul>
                            {pessoasFavoritas.map((user) => {
                                return (
                                    <li key={user}>
                                        <a href={`/users/${user}`}>
                                            <img src={`https://github.com/${user}.png`} alt={`${user}`}/>
                                            <span>{user}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>

                </div>

            </MainGrid>
        </>
    )
}
