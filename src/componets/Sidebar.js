import {AlurakutProfileSidebarMenuDefault} from "../lib/AlurakutCommons";
import {Box} from "./Box";

export function Sidebar({gitHubUser}){
    return (
        <Box as="aside">
            <img src={`https://github.com/${gitHubUser}.png`} alt="Foto perfil"/>
            <hr style={{color: 'red'}}/>
            <a className="boxLink" href={`https://github.com/${gitHubUser}`}>
                @{gitHubUser}
            </a>
            <hr/>
            <AlurakutProfileSidebarMenuDefault/>
        </Box>
    );
}
