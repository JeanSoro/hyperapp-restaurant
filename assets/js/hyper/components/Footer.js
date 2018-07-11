import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
      <footer>
        <div className="container">
          <nav className="menu">
            <a href="#">Menu</a>  
            <a href="#">Reservations</a>
            <a href="#">Contact Us</a>
            <a href="#">Reviews & Media</a>
            <a href="#">Our Story</a>
          </nav>

          <ul className="social-media-logos">
            <li>
              <a href="http://facebook.com" target="_blank"> 
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="http://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="http://google.com" target="_blank">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul>

          <div className="copyright">
           &copy; 2018 Copyright Jean Soro
          </div>
        </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
