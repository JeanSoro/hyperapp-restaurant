import {h, app} from 'hyperapp'

export default function Contact({state, actions}) {
  return (
      <section id="contact-us" className="texturebg">
        <div className="container">
          <h5 className="comp-title">Contact Us</h5>
          <h2>Always Here To Help</h2>

          <div className="box">
            <div className="row">
              <div className="col-md-6">
                <div className="city">
                  Montreal, Ca
                </div>
                <h6 className="address">
                7400 Sherbrooke Ouest<br/>
                Montreal, CA H4B 1R8
                </h6>
                  <p>
                    <strong>email:</strong> <a 
                    href="mailto:info@primesteak.com">info@primesteak.com</a>
                  </p>
              </div>

              <div className="col-md-6">
                <h6>
                  Call directly:
                </h6>
                <div className="directory">
                  514-566-7788
                </div>
                <h6>
                  Lunch Service
                </h6>
                <p>
                  Friday, Saturday and Sunday:<br/> 
                  Bookings from 12pm - 1:30pm
                </p>

                <h6>
                  Dinner Service
                </h6>
                <p>
                  Daily:<br/> 
                  Bookings from 6pm - 10:30pm
                </p>
              </div>

            </div>
          </div>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
