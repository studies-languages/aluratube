import styled from 'styled-components'
import { config } from '../config'

const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 50%
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 30px;
    gap: 16px;
  }
`
const StyledBanner = styled.div`
  /* background: no-repeat, cover; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${config.imageBanner});
  height: 230px;
`


export function Header() {
  return (
    <StyledHeader>
      <StyledBanner />
      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} alt="Image do Perfil" />
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