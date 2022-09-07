import { Marquee, SlideContainer } from './styles'

import reactLogo from '../../assets/skills/react-original.svg'

import cssLogo from '../../assets/skills/css3-original.svg'
import gitHubLogo from '../../assets/skills/github-original.svg'
import htmlLogo from '../../assets/skills/html5-original.svg'
import jamstackLogo from '../../assets/skills/jamstack-original.svg'
import javascriptLogo from '../../assets/skills/javascript-original.svg'
import nextLogo from '../../assets/skills/nextjs-original.svg'
import npmLogo from '../../assets/skills/npm-original-wordmark.svg'
import typescriptLogo from '../../assets/skills/typescript-original.svg'
import vscodeLogo from '../../assets/skills/vscode-original.svg'
import tailwindLogo from '../../assets/skills/tailwindcss-plain.svg'

export function Skills() {
  return (
    <SlideContainer>
      <Marquee>
        <div className="content">
          <div className="slide">
            <img src={reactLogo} alt="" />
          </div>
          <div className="slide">
            <img src={typescriptLogo} alt="" />
          </div>
          <div className="slide">
            <img src={cssLogo} alt="" />
          </div>
          <div className="slide">
            <img src={javascriptLogo} alt="" />
          </div>
          <div className="slide">
            <img src={gitHubLogo} alt="" />
          </div>
          <div className="slide">
            <img src={htmlLogo} alt="" />
          </div>
          <div className="slide">
            <img src={jamstackLogo} alt="" />
          </div>
          <div className="slide">
            <img src={tailwindLogo} alt="" />
          </div>
          <div className="slide">
            <img src={nextLogo} alt="" />
          </div>
          <div className="slide">
            <img src={npmLogo} alt="" />
          </div>
          <div className="slide">
            <img src={vscodeLogo} alt="" />
          </div>
          <div className="slide">
            <img src={reactLogo} alt="" />
          </div>
          <div className="slide">
            <img src={typescriptLogo} alt="" />
          </div>
          <div className="slide">
            <img src={cssLogo} alt="" />
          </div>
          <div className="slide">
            <img src={javascriptLogo} alt="" />
          </div>
          <div className="slide">
            <img src={gitHubLogo} alt="" />
          </div>
          <div className="slide">
            <img src={htmlLogo} alt="" />
          </div>
          <div className="slide">
            <img src={jamstackLogo} alt="" />
          </div>
        </div>
      </Marquee>
    </SlideContainer>
  )
}
