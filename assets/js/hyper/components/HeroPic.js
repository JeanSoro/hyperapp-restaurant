import {h, app} from 'hyperapp'

export default function TopImage({state, actions}) {
  return (
      <section id="top-img">
        <div className="container">
          <div className="title">
            <h5>Welcome</h5>
            <h1>Prime Beef<br></br>Restaurant</h1>
          </div>
          <div className="contact-info">
            <div className="container">
              <div className="booking">Book Table Directly</div>
              <h2>(718) - 219 - 8652</h2>
              <div className="hours">
                Opening Hours <strong>Mon - Fri: </strong> 11am - 9pm <strong>Sat - Sun: </strong> 11:30am - 12pm
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
