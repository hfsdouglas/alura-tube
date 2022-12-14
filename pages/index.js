import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"

function HomePage() {
    const styleHomePage = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }

    console.log(config.playlists)

    return (
        <>
            <CSSReset />
            <div style={styleHomePage}>
                <Menu /> 
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
    
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`

function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner"  />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}  />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    console.log("Dentro do componente", props)
    const playlistsNames = Object.keys(props.playlists)

    // Statement
    // Retorno por expressão

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName]
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                )           
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}