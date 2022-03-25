class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      wallet: {},
    };
  }

  /**
   * fetches products stored in data/products.json file and returns an array of product objects
   *
   * @returns {promise<object[]>} products array
   */
  async getProducts() {
    let products = [];
    try {
      const response = await fetch("data/products.json");
      products = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      return products;
    }
  }
  /**
   * fetches wallet stored in data/wallet.json file and returns wallet object
   * @returns {Promise<object>} wallet object
   */
  async getWallet() {
    let wallet = [];
    try {
      const response = await fetch("data/wallet.json");
      wallet = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      return wallet;
    }
  }

  async componentDidMount() {
    try {
      const products = await this.getProducts();
      const wallet = await this.getWallet();
      this.setState({
        products,
        wallet,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <h1 className="text-center">
        Enjoy yourself while coding. Its all simple
      </h1>
    );
  }
}

class Shop extends React.Component{
  render(){
    return(
      <div>
      <h1 className="text-center">Welcome giz Enterprice</h1>
      <h1 className="text-center">Our PRODUCTS</h1>
      <div className="row">
          <div className="col-lg-4 mt-4">
              <div className="card">
                  <img className="card-img-top" src="img/b.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">Quality earphones</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                  <img className="card-img-top" src="img/h.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">HP laptop</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                  <img className="card-img-top" src="img/j.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">laptop Acer</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <br/>
      <div className="row">
          <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                  <img className="card-img-top" src="img/p.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">large Screen HP</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                  <img className="card-img-top" src="img/k.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">Durable Iphones</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-4 mt-4">
              <div className="card portfolioContent">
                  <img className="card-img-top" src="img/mac.jpg" alt="Card image" style="width:100%"/>
                  <div className="card-body">
                      <h4 className="card-title">MacBook Air</h4>
                      <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="text-center">
                          <a href="#" className="btn btn-success">Add</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

class wallet extends React.Component{
  render(){
    return(
      <div>
         <div className="row border" >
            <h2 className="center">Wallet</h2>
            <div className="col-lg-6 mt-4">
                
                    <div className="card-body">
                       <p className="card-text">name</p>
                       <p className="card-text">contact</p>
                        <div className="text-center">
                  
                        </div>
                   
                </div>
            </div>
  
            <div className="col-lg-6 mt-4">
                
              <div className="card-body">
                 <p className="card-text">benson</p>
                 <p className="card-text">09765432</p>
                  <div className="text-center">
            
                  </div>
             
          </div>
      </div>
  
            
        </div>
      </div>
    )
   
  }
}

class Cart extends React.Component{
  render(){
    return(
      <div>
         <div className="row border" >
          <h2 className="center">Cart</h2>
          <div className="col-lg-6 mt-4">
              
                  <div className="card-body">
                     <p className="card-text"> Worth</p>
                      <div className="text-center">
                
                      </div>
                 
              </div>
          </div>

          <div className="col-lg-6 mt-4">
              
            <div className="card-body">
               <p className="card-text">10000</p>
                <div className="text-center">
          
                </div>
           
        </div>
    </div>

          
      </div>

      </div>
    )
  }
}

class Basket extends React.Component{
  render(){
    return(
      <div>
         <div className="row border" >
        <h2 className="center">Basket</h2>
        <div className="col-lg-6 mt-4">
            
                <div className="card-body">
                   <p className="card-text">items</p>
                    <div className="text-center">
              
                    </div>
               
            </div>
        </div>

        <div className="col-lg-6 mt-4">
            
          <div className="card-body">
             <p className="card-text">+</p>
              <div className="text-center">
        
              </div>
         
      </div>
  </div>

        
    </div>
      </div>
    )
  }
}

class Buy extends React.Component{
  render(){
    return(
      <div>
         <div className="row">
        <button className="btn btn-success">Buy</button>
    </div>
      </div>
    )
  }
}

ReactDOM.render(<Shopping />, document.getElementById("shopping"));
