import {h, app} from 'hyperapp'
import Header from './Header.js'
import HeroPic from './HeroPic.js'
import OurStory from './OurStory.js'
import Menu from './Menu.js'
import RandomQuote from './RandomQuote.js'
import Reviews from './Reviews.js'
import Contact from './Contact.js'
import Footer from './Footer.js'


export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions}/>
      <HeroPic state={state} actions={actions}/>
      <OurStory state={state} actions={actions}/>
      <Menu state={state} actions={actions}/>
      <RandomQuote state={state} actions={actions}/>
      <Reviews state={state} actions={actions}/>
      <Contact state={state} actions={actions}/>
      <Footer state={state} actions={actions}/>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
