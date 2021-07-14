import {Box} from '../componets/Box'
import {MainGrid} from '../componets/MainGrid'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../lib/AlurakutCommons'
import {useEffect, useState} from "react";
import {Sidebar} from "../componets/Sidebar";
import {ProfileRelationsBox} from "../componets/ProfileRelationBox";
//
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


export default function Home() {
    const gitHubUser = 'enosads'
    const [communities, setCommunities] = useState([{
        title: 'Eu odeio acordar cedo',
        image_url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }]);
    const [followers, setFollowers] = useState([]);


    const pessoasFavoritasUsernames = [
        'omariosouto',
        'diego3g',
        'diogojustino',
        'maykbrito',
        'filipedeschamps',
        'akitaonrails',
        'rocketseat'
    ]
    const pessoasFavoritas = pessoasFavoritasUsernames.map(pessoa => {
        return {
            title: pessoa,
            image_url: `https://github.com/${pessoa}.png`
        }
    })

    function handleCreateCommunity(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const community = {
            title: formData.get('title'),
            image_url: formData.get('image')
        }
        setCommunities([...communities, community]);
    }

    useEffect(() => {
        fetch('https://api.github.com/users/enosads/followers')
            .then(response => response.json())
            .then(followers => {
                return followers.map(follower => {
                    return {
                        title: follower.login,
                        image_url: follower.avatar_url
                    }
                })
            })
            .then(setFollowers)
    }, [])


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
                    <ProfileRelationsBox title="Seguidores" itens={followers}/>
                    <ProfileRelationsBox title="Pessoas da comunidade" itens={pessoasFavoritas}/>
                    <ProfileRelationsBox title="Comunidades" itens={communities}/>
                </div>
            </MainGrid>
        </>
    )
}
