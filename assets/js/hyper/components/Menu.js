import {h, app} from 'hyperapp'

export default function Menu({state, actions}) {
  return (
      <section id="special-menu" className="texturebg">
        <div className="container">
          <h5 className="comp-title">Special Menu</h5>
          <h2>Delicious Flavor of Autumn</h2>
          <div className="row boxes">
            <div className="col-md-4">
              <div className="box">
                <div className="box-image"> 
                  <div className="price-circle">$50</div>
                </div>
                <span className="title">Super BBQ Grill No Smoke</span>
                <p className="details">Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                  <div className="box-image"> 
                    <div className="price-circle">$50</div>
                  </div>
                  <span className="title">Super BBQ Grill No Smoke</span>
                  <p className="details">Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables</p>
                </div>
            </div>

            <div className="col-md-4">
              <div className="box">
                  <div className="box-image"> 
                    <div className="price-circle">$50</div>
                  </div>
                  <span className="title">Super BBQ Grill No Smoke</span>
                  <p className="details">Fried eggs, Steak, Bacon, Baked potato or French fries, Side of Vegetables</p>
                </div>
            </div>
          </div>
          <a className="link" href="#">View Full Menu</a>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
