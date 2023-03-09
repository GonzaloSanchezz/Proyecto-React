import carrito from "./assets/OIP.jpg"
import './App.css'

function NavBar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary barraNavegador">
                <div class="container-fluid navegador">
                    <a class="navbar-brand" href="#">GNS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse listaNav" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Clothes</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Shipping</a>
                        </li>
                        <li class="nav-item carritoCompras">
                        <a class="nav-link" href="#">Shopping Cart</a> <span><img class="carrito" src={carrito} alt=""/> <h1 class="contador">3</h1></span> 
                        </li>

                    </ul>

                    </div>

                    
                </div>

            </nav>




        </div>

    )
}

export default NavBar
