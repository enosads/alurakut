import {Box} from '../componets/Box'
import {MainGrid} from '../componets/MainGrid'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from "../componets/ProfileRelations";
import {useState} from "react";
import {Sidebar} from "../componets/Sidebar";
//
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


export default function Home() {
    const gitHubUser = 'enosads'
    const [communities, setCommunities] = useState([{
        id: new Date().toISOString(),
        title: 'Eu odeio acordar cedo',
        image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }]);

    const pessoasFavoritas = [
        'omariosouto',
        'diego3g',
        'diogojustino',
        'maykbrito',
        'filipedeschamps',
        'akitaonrails',
        'rocketseat'
    ]

    function handleCreateCommunity(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const community = {
            id: new Date().toISOString(),
            title: formData.get('title'),
            image: formData.get('image')
        }
        setCommunities([...communities, community]);
    }

    return (
        <>
            <AlurakutMenu githubUser={gitHubUser}/>
            <MainGrid>
                <div className="profileArea" style={{gridArea: 'profileArea'}}>
                    <Sidebar gitHubUser={gitHubUser}/>
                </div>
                <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
                    <Box>
                        <h1 className="title">Bem vindo(a)</h1>
                        <OrkutNostalgicIconSet/>
                    </Box>
                    <Box>
                        <h2 className="subTitle"> O que você deseja fazer?</h2>
                        <form onSubmit={handleCreateCommunity}>
                            <div>
                                <input
                                    placeholder="Qual vai ser o nome da sua comunidade?"
                                    name='title'
                                    aria-label="Qual vai ser o nome da sua comunidade?"
                                    type='text'
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Coloque uma URL para usarmos de capa"
                                    name='image'
                                    aria-label="Coloque uma URL para usarmos de capa"
                                    type='text'
                                />
                            </div>
                            <button>
                                Criar comunidade
                            </button>
                        </form>
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
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">Comunidades ({communities.length})</h2>
                        <ul>
                            {communities.map((community) => {
                                return (
                                    <li key={community.id}>
                                        <a href={`/comunidades/${community.title}`}>
                                            <img src={community.image} alt={community.title}/>
                                            <span>{community.title}</span>
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
