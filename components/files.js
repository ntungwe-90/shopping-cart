class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      wallet: {},
    };
  }

  // class Product extends React.Component {
//     render() {
//         // const {title, image,category, price,qty}=this.props.product
//         // console.log(this.props)
//         return this.props.products.map((product) => ( //curlybraces

//             <div className="container" key={product.id} style={{backgroundColor:'powderblue'}}>
//             <div className="col-4 ">
//                 <div className="card">
//                     <div className="card text-center">
//                         <div className="card">
//                         <div className="prize__percent">20% off</div>
//                         <img
//                             src={product.image}
//                             className="card-img-top  "
//                             alt="..."
//                             style={{ height: "20%" }}
//                         />
//                         <div className="card-body">
//                             <h5 className="card-title">{product.title}</h5>
//                             <p className="card-text">Price:{product.price}</p>
//                             <p className="card-text">
//                                 <small className="text-muted">Quantiyt:{product.qty}</small>
//                             </p>
//                             <p className="card-text">Category:{product.category}</p>

//                             <button onClick={()=>this.props.onCart(product)} className="btn btn-success" > 
//                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
//                           <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//                          </svg>
//                             Add to Cart </button>

//                         </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>


//             </div>

//         ));
//     }
// }

 /**
     * fetches wallet stored in data/wallet.json file and returns wallet object
     * @param {object} product
     * handledAddToCart to accept object
     *1 checked if quantity is 1
     *2 check if product exist
     *3 created a cardItem and added the selected product to it
     a
     */

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
      <div>
        <Shop products={this.state.products} />
      </div>
      // <h1 className="text-center">
      //   Enjoy yourself while coding. Its all simple
      // </h1>
    );
  }
}

class Shop extends React.Component{
  render(){
    return(
   this.props.products.map((product) =>(
     <div>
  
     <p>{product.title}</p>
        <p><img src={product.image}/></p> 
        <p>{product.price}</p> 
        <p>{product.category}</p>
        <p>{product.rating}</p> 
        <p>{product.qty}</p>
        
   
   </div>
   ))

      
    )
  }
}

 /* class Shop extends React.Component { */
//   render() {
//     return (
//       <div>

//         <nav className="navbar navbar-expand-lg navbar-light bg-light bg-primary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">Daavi and Daughter Shop</a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//         </nav>
//   <h1 className="text-center">Welcome Biz Computers Enterprice</h1>
//         <h1 className="text-center">Our Products</h1>
//         <div className="row">
//           <div className="col-lg-4 mt-4">
//             <div className="card">
//               <img className="card-img-top" src="img/b.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">Quality earphones</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mt-4">
//             <div className="card portfolioContent">
//               <img className="card-img-top" src="img/kj.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">HP laptop</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mt-4">
//             <div className="card portfolioContent">
//               <img className="card-img-top" src="img/j.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">laptop Acer</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br />
//         <div className="row">
//           <div className="col-lg-4 mt-4">
//             <div className="card portfolioContent">
//               <img className="card-img-top" src="img/j.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">large Screen HP</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mt-4">
//             <div className="card portfolioContent">
//               <img className="card-img-top" src="img/h.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">Durable Iphones</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-4 mt-4">
//             <div className="card portfolioContent">
//               <img className="card-img-top" src="img/mac.jpg" alt="Card image" style={{ width: "100%" }} />
//               <div className="card-body">
//                 <h4 className="card-title">MacBook Air</h4>
//                 <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <div className="text-center">
//                   <a href="#" className="btn btn-success">Add To Card</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// //information about the buyer

// class Wallet extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="row border" >
//           <h2 className="center"> Wallet</h2>
//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text">name</p>
//               <p className="card-text">contact</p>
//               <p className="card-text">email</p>
//               <p className="card-text">balance</p>
//               <p className="card-text">address</p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>

//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text">benson</p>
//               <p className="card-text">056775432</p>
//               <p className="card-text">benson@gmail.com</p>
//               <p className="card-text">7000000</p>
//               <p className="card-text">tesano total</p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>


//         </div>
//       </div>
//     )

//   }
// }

// //products to buy and total
// class Cart extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="row border" >
//           <h2 className="center">Cart</h2>
//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text"> </p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>

//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text"></p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>


//         </div>

//       </div>
//     )
//   }
// }

// class Basket extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="row border" >
//           <h2 className="center">Basket</h2>
//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text"></p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>

//           <div className="col-lg-6 mt-4">

//             <div className="card-body">
//               <p className="card-text"></p>
//               <div className="text-center">

//               </div>

//             </div>
//           </div>


//         </div>
//       </div>
//     )
//   }
// }

// class Buy extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="row">
//           <button className="btn btn-success">Pay</button>
//         </div>
//       </div>
//     )
//   }
// }

// class Buyer extends React.Component {
//   render() {
//     return (
//       <div className="container-fluid mt-3 border" >
//         <Shop />
//         <Wallet />
//         <Cart />
//         <Basket />
//         <Buy />
//       </div>
//     )
//   }
// }



// ReactDOM.render(<Shopping/>, document.getElementById("shopping"));
