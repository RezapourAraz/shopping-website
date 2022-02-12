import star1 from '../assets/icons/star-1.svg';
import star2 from '../assets/icons/star-2.svg';


const getSpecial = (products) => {

    const special = [];
    products.map(product  => {
        if (product.id === 4) {
            special.push(product);
        }
        return special
    });
    return special;
}

const getPopular = (products) => {

    const popular = [];
    products.map(product => {
        if (product.rating.rate >= 4.7 ) {
            popular.push(product);
        }
        return popular
    });
    return popular;
}

const CategoryFind = (products) => {
    const category = {
        mens: [],
        jewelery: [],
        electronics: [],
        womens:[]
    };
    products.map(product => {
        if(product.category === "men's clothing") {
            category.mens.push(product);
        } else if (product.category === "jewelery") {
            category.jewelery.push(product);
        } else if (product.category === "electronics") {
            category.electronics.push(product);
        } else {
            category.womens.push(product);
        }
        return category;
    })
    return category;
}


const splitTitle = (title) => {
    const newTitle = title.split(" ");
    const splitedTitle = newTitle[0] +" " + newTitle[1];
    return splitedTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}

const ratingStar = (rating) => {
    const star = [];
    const rate = Math.floor(rating)
    for(let i = 1 ; i <= 5 ; i++) {
        if(i <= rate) {
            star.push(<img src={star2} alt="star" />)
        } else {
            star.push(<img src={star1} alt="star" />)
        }
    }
    return star;
}


export {getSpecial, getPopular, splitTitle , CategoryFind, isInCart, quantityCount, ratingStar};