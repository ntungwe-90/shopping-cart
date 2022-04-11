const {
    hashHistory,
    Link,
    Switch,
    Route,
    HashRouter: Router,
    withRouter,
} = ReactRouterDOM;

class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-4 mb-4">
                <div className="card shadow-sm">
                    <div className="prize__percent">20%off </div>
                    <img
                        className="bd-placeholder-img card-img-top"
                        src={this.props.product.image}
                        style={{ height: "35vh" }}
                        alt="..."

                    />
                    <div className="card-body text-center">
                        <Link to={'/Products/ ' + this.props.product.id}><p className="card-text text-truncate">
                            {this.props.product.title}</p>
                        </Link>
                        <div className="d-flex justify-contenet-between align-items-center mid">
                            <p className="card-text">$<strong>{this.props.product.price}</strong></p>
                            <p className="prices-amount-old">$<strong>1000</strong></p>
                        </div>

                        <p className="card-text">{this.props.product.category}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                quantity:pc(s){this.props.product.qty}
                            </small></p>
                        <AddToCart onAddToCart={this.props.onAddToCart} />
                    </div>
                </div>
            </div>

        )
    }
}

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
    }
    async getProductById(id) {
        let product = {}
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
            // console.log(products)
            // console.log(id);
            product = products.find(p => p.id == id);
            // console.log(product);
        } catch (error) {
            console.log(error);
        }
        return product;
    }
    async componentDidMount() {
        try {
            const { id } = this.props.match.params;
            const product = await this.getProductById(id);
            this.setState({
                product,
            });

        } catch (error) {
            console.log(error)
        }
    }
    render() {

        // console.log(this.state)
        // const {image, title, description, price }

        return (
            <div style={{ marginTop: '60px', backgroundColor: "lightgrey" }}>
                <Link to='/' className=" bton">HOME</Link>
                <p className=" title text-center">Our ProductDetails</p>
                <div className="container">
                    <div className="row border">
                        <div className="col-4 border">
                            <div className="prize__percent2">20%off </div>
                            <img src={this.state.product.image} className="card.img" alt=''
                                style={{ height: "35vh" }}
                            />

                        </div>
                        <div className="col-8 border ">
                            <h2 className="title ">{this.state.product.title}</h2>
                            <div className="text-truncate">{this.state.product.description}</div>
                            <h1><strong></strong></h1> 
                            <div>{this.state.product.category}</div> <br></br>
                            <div><button className="btn btn-danger">{this.state.product.qty}pieces left</button></div>
                            <br></br>
                            <button className='btn btn-success'>Add to Cart</button>
                        </div>

                    </div>
                </div>
                {/* <Product product={Product} /> */}

            </div>
        )
    }
}

ProductDetail = withRouter(ProductDetail)

class Shop extends React.Component {
    handleAddToCart = () => {

        alert("product added")

    };
    render() {
        return (
            <div className="col-8 border" style={{ backgroundColor: "rgb(141, 159, 161)" }}>
                <div className="row">
                    {this.props.products.map((product) =>
                        <Product key={product.id} product={product} onAddToCart={() => this.props.onAddToCart(product)}
                        
                          />
                    )}

                </div>
            </div>
        );
    }
}



class Sidebar extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div className="col-4">
                <Wallet wallet={this.props.wallet} />
                <Cart cart={this.props.cart} 
                onIncrease={this.props.onIncrease}
                onDecrease={this.props.onDecrease} 
                onDelete={this.props.onDelete} 
                onClearCart = {this.props.onClearCart}
                />
                <Basket />
            </div>
        );
    }
}


class Wallet extends React.Component {
    render() {
        const { owner = "", balance = 0 } = this.props.wallet;
        const { name = "", address = "", phoneNumber = "", email = "" } = owner;
        // console.log(this.props)
        return (

            <div className="container border text-center">
                <h5>My Wallet</h5>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>address: {address}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p> Balance: {balance}</p>
            </div>

        );
    }
}
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="row border">
                <div className="col 3">
                   
                    <h3>My Cart</h3>
                    {this.props.cart.map((item) => (
                        <CartItem key={item.id} item={item} 
                        onIncrease={this.props.onIncrease}
                        onDecrease={this.props.onDecrease}
                        onDelete={this.props.onDelete}
                        onClearCart={this.props.onClearCart}
                       
                        />

                           
                    ))}
                    <button  onClick={()=>this.props.onClearCart(this.props.item)}>Clear Cart</button>
                    <Link to='/'>homepage</Link>
                    {/* <Link to='/cart'>View Cart</Link> */}
                    
                </div>
            </div>

        );
    }
}

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="col-4 mb-4">
                <h5>cart items</h5>
                <div className="card">
                    <div className="card-body">
                        <img
                            className="bd-placeholder-img card-img-top"
                            src={this.props.item.image}
                            style={{ height: "15vh" }}
                            alt="..."

                        />
                        <p className="card-title text-truncate">{this.props.item.title}</p>
                        <p className="card-text"><strong>${this.props.item.price}</strong></p>
                        <p className="card-text">{this.props.item.category}</p>

                        <p className="card-text">
                            <small className="text-muted">
                                Quantity:{this.props.item.cqty}
                            </small>
                        </p>
                        <div className="d-flex justify-contenet-between  ">
                            <button className=""  onClick={()=>this.props.onIncrease(this.props.item)}>+</button><br />
                            <button className="" onClick={()=>this.props.onDecrease(this.props.item)}>-</button><br />
                            <button className="" onClick={()=>this.props.onDelete(this.props.item)}>Delete</button><br />
                           
                           

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

class RemoveCartItem extends React.Component {
    render() {
        return (
            <>
                <button className="" 
                // onClick={this.props.onRemoveToCart}
                >Remove CartItem</button><br />
            </>

        )
    }
}

class AddToCart extends React.Component {
    render() {
        return (

            <button className="btn btn-success" onClick={this.props.onAddToCart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                Add To Cart</button>

        )
    }
}



class Basket extends React.Component {
    render() {
        return (
            <p>basket</p>
        )
    }
}

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            wallet: {},
            cart: [],
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

    /**
     * fetches wallet stored in data/wallet.json file and returns wallet object
     * @param {object} product
     * handledAddToCart to accept object
     * checked if quantity is 1
     * check if product exist
     * created a
     */



    render() {
        // console.log(this.props)

        return (
            <>
                <div className="row border">
                    <h1 className="text-center " style={{ marginTop: "70px" }}>
                        Enjoy yourself while shopping. Its affordable
                    </h1>

                    <Shop products={this.state.products} onAddToCart={this.props.onAddToCart} 
                   
                    //  onRemoveToCart={this.props.onRemoveToCart}
                      />
                    <Sidebar wallet={this.state.wallet} cart={this.props.cart}
                     onIncrease={this.props.onIncrease}
                     onDecrease={this.props.onDecrease} 
                     onDelete={this.props.onDelete} 
                     onClearCart={this.props.onClearCart}
                    />


                </div>
            </>

        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
        };
        
        this.handleAddToCart = this.handleAddToCart.bind(this)
        // this.handleIncrease = this.handleIncrease.bind(this)
        // this.handleDecrease = this.handleDecrease.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
        // this.handleClearCart = this.handleClearCart(this)
        
    }
/** steps for increase and decress
1 check if products quantity is grater than 1
 2 seearch cart to find product id  or if product exist
 3 add if product exist bby mapping through 
 4 
*/

   
    /** steps to add product to cart
     *1 if qty is > 1
     *2 if product is instock 
     * spread operator makes a copy and then we append
     
     * add our cart to cart array
     */
    handleAddToCart = (product) => {
        if (product.qty >= 1) {
            const available = this.state.cart.find((item) => item.id === product.id);
            if (available) {
                alert("product exist in cart")
            } else {

                let CartItem = { ...product, cqty: 1 };
                let cart = [...this.state.cart, CartItem];
                this.setState({
                    cart: cart,
                })
            }

        }
    }
   
    handleIncrease = (product) =>{
        if (product.qty >= 1) {
           
            const exist = this.state.cart.find((item) => item.id === product.id)
            
            if(exist){
                
             let cart = this.state.cart.map((item)=> item.id === product.id ?{...exist, cqty:exist.cqty + 1} : item)
            
             this.setState({

                cart:cart

            })
           
            }
        }
     }
      handleDecrease = (product) =>{
         if (product.qty >=1){
             const noexist = this.state.cart.find((item) =>item.id ===product.id);
             if(noexist){
             let cart = this.state.cart.map((item)=> item.id === product.id ?{...noexist, cqty:noexist.cqty - 1} : item)
             this.setState({cart:cart})
             }
         }
      }
      handleDelete = (product) =>{
          if (product) {
              if (product.qty >= 1){
           let cart = this.state.cart.filter(item => item.id !== product.id)
          this.setState({
              cart:cart})
         
      }
    }
}
      handleClearCart = (product) => {
          alert("card has been cleared")
      }
    render() {
      
        return (

            <Router>
                <Switch>
                    {/*hompage route*/}
                    <Route path="/" exact>
                        <Shopping 
                        onAddToCart={this.handleAddToCart}
                        cart={this.state.cart}
                        onIncrease={this.handleIncrease}
                        onDecrease={this.handleDecrease}
                        onDelete={this.handleDelete}
                        onClearCart={this.handleClearCart}
                            // onRemoveToCart ={this.handleRemoveToCart}
                        />
                       
                    </Route>
                    {/*productdetails route*/}
                    <Route path="/products/:id"><ProductDetail /></Route>
                    {/*cart route*/}
                    <Route path='/Cart' >
                        <Cart/>
                    </Route>
                    <Route path='/CartItem'>Cartitems</Route>

                </Switch>
            </Router>

        )
    }
}




ReactDOM.render(<App />, document.getElementById("shopping"));



//https://github.com/FNNDSC/ChRIS_ui/issues
