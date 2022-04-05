const {
    hashHistory,
    Link,
    Switch,
    Route,
    HashRouter: Router,
    withRouter,
} = ReactRouterDOM;

class Product extends React.Component {
    handleAddToCart = () => {

        alert("product added")

    };
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
                        <button className="btn btn-success" onClick={() => this.props.onAddToCart()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            Add To Cart</button>
                    </div>
                </div>
            </div>

        )
    }
}

class ProductDetail extends React.Component {
    async getProductById (id) {
        let product ={}
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
            // console.log(products)
            console.log(id);
            product = products.find(p => p.id == id);
            console.log(product);
        }catch (error) {
            console.log(error);
        }
        return product;
    }
    render() {
    //    const {id} = this.props.match.params.id;
    //    this.getProductById(id);
    //    console.log(this.getProductById(id))
   
  
    //    <div>
    //        <div className="container">
    //            <div className='row'>
    //                <div className='col-3 order'>
    //                    <img src='' alt=''/>
    //                </div>
    //                <div className='col-6 border'>
    //                    <div className='title'>name</div>
    //                    <div className=''>Description</div>
    //                    <div className=''>price</div>
    //                    <div className=''>qty</div>
    //                    <button className='btn btn-success'>Add to Cart</button>
    //                </div>

    //            </div>
    //        </div>
    //    </div>
        return (
            <div style={{marginTop:'60px'}}>
                {/* <p>Our ProductDetails</p>
                <div className="container">
               <div className='row'>
                   <div className='col-4 '>
                        <img src={this.props.image}  className='card.img'alt=''/>
                    </div>
                    <div className='col-8 '>
                        <div className='title'>{this.props.title}</div>
                        <div className=''>{this.props.Description}</div>
                        <div className=''>{this.props.price}</div>
                        <div className=''>{this.props.qty}</div>
                        <button className='btn btn-success'>Add to Cart</button>
                    </div>

                </div>
           </div> */}
                <Product product={Product} />
                <Link to='/'>HOME</Link>
            </div>
        )
    }
}

class Shop extends React.Component {
    handleAddToCart = () => {

        alert("product added")

    };
    render() {
        return (
            <div className="col-8 border" style={{ backgroundColor: "#61dafb" }}>
                <div className="row">
                    {this.props.products.map((product) =>
                        <Product key={product.id} product={product} onAddToCart={this.props.onAddToCart} />
                    )}

                </div>
            </div>
        );
    }
}



class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-4">
                <Wallet wallet={this.props.wallet} />
                <Cart />
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
    render() {
        return (
            <div>
                <Link to='/'>homepage</Link>
                <h3>My Cart</h3>
                <p>empty card</p>

            </div>

        );
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

    handleAddToCart = () => {

        alert("product added")

    };

    render() {

        return (
            <>
                <div className="row border">
                    <h1 className="text-center " style={{ marginTop: "70px" }}>
                        Enjoy yourself while shopping. Its affordable
                    </h1>

                    <Shop products={this.state.products} onAddToCart={this.handleAddToCart} />
                    <Sidebar wallet={this.state.wallet} />
                </div>
            </>

        );
    }
}

const App = () => {
    return (

        <Router>
            <Switch>
                {/*hompage route*/}
                <Route path="/" exact><Shopping /></Route>
                {/*productdetails route*/}
                <Route path="/products/:id"><ProductDetail /></Route>
                {/*cart route*/}
                <Route path='/Cart'>Cart</Route>
            </Switch>
        </Router>

    )
}



ReactDOM.render(<App />, document.getElementById("shopping"));



//https://github.com/FNNDSC/ChRIS_ui/issues