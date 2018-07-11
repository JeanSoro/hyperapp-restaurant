import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
      <section id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="chef-img">
                <img src='../img/chef-img.jpg'/>
              </div>
            </div>
            <div className="col-md-4">
              <h5 class="title">REVIEWS</h5>
              <h2>What they say about us</h2>
              <h4>"best restaurant in ottawa!"</h4>
              <p>Hashtag church-key enamel pin farm-to-table mumblecore. Fixie tilde pug, meditation prism hammock polaroid church-key brooklyn salvia tofu chambray occupy marfa direct trade.
              </p>
              <div className="author"><strong>Fredo Andanoni</strong> - <em>Winner of Iron Chefs</em></div>
              <div className="arrows">
                <i class="fas fa-arrow-left"></i>
                <i class="fas fa-arrow-right ready"></i>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
