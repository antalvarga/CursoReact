import React, { Component } from 'react';
//import api from './services/api';
import api from '../../services/api'; 
import './styles.css';

import { Link } from 'react-router-dom';


export default class Main extends Component {
    state = {
        products: []
        , productInfo: {}
        , page: 1
        ,
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async ( page = 1 ) => {
        //const response = await api.get('/products');
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        //console.log(response.data.docs);
        //this.setState( {products: response.data.docs} );
        this.setState( {products: docs, productInfo, page} );
    };

    prevPage = () => {
        const {page, productInfo} = this.state;

        if (page === 1) return;

        const pageNumber = page -1;

        this.loadProducts(pageNumber);
    }


    // aula 8 (-05:34)    
    nextPage = () => {

        const { page, productInfo } = this.state;

        //alert( `pagina ${page} / pages ${productInfo.pages}` );


        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    }

    render() {

    //return <h1>Contagem de produtos: {this.state.products.length} </h1>
    /*
        return(
            <div className="product-list">
                
                {this.state.products.map( product => (
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    */
        const {products, page, productInfo} = this.state; 

        return (
            <div className="product-list">
                {products.map( product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to = {`/products/${product._id}`} >Acessar</Link>

                    </article>
                ))}
                <div className="actions">
                    <button disabled = {page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled = {page === productInfo.pages}  onClick={this.nextPage} >Próxima</button>
                </div>
            </div>
        );                    
    
    }
}   