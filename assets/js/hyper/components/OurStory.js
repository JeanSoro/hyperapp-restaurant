import {h, app} from 'hyperapp';

export default function OurStory({state, actions}) {
  return (
      <section id="our-story">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="comp-title">Our Story</h5>
              <h2> Cooking is the art of adjustment</h2>
              <p>Hashtag church-key enamel pin farm-to-table mumblecore. Fixie tilde pug, meditation prism hammock polaroid church-key brooklyn salvia tofu chambray occupy marfa direct trade.
              Quinoa four loko brunch meggings keytar, blog poke roof party hammock williamsburg. Bitters biodiesel 8-bit cloud bread vaporware banh mi gochujang cliche roof party lo-fi fingerstache tousled coloring book whatever.
              </p>
              <div className="quote">Michael Ballack - <strong>Master Chef/Owner</strong></div>
              <a href="#" className="reservation-btn">Reserve</a>
            </div>
            <div className="col-md-6">
              <div className="video-img">
              
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
