import styled from "styled-components";
import { SearchProps } from "./Menu/Search";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;
interface Props {
  playlists: any
  search: string
}
interface Video {
  url: string
  thumb: string
}
export function Timeline({ playlists, search }: Props) {

  const playlistNames = Object.keys(playlists)
  console.log(playlistNames)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = playlists[playlistName]

        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video:any) => video.title.toLowerCase().includes(search.toLocaleLowerCase()))
              .map((video: Video, index: number) => {
                return (
                  <a href={video.url} key={index}>
                    <img src={video.thumb} alt="Imagem" />
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