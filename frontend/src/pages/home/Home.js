import './Home.css';
import React from 'react'; 
import axios from 'axios';


class Home extends React.Component {
    state = {
        details: [],
        user: "",
        quote: "",
    };

    componentDidMount() {
        let data;

        axios
            .get("http://localhost:8000/api/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }

    renderSwitch = (param) => {
        switch (param + 1) {
            case 1:
                return "primary ";
            case 2:
                return "secondary";
            case 3:
                return "success";
            case 4:
                return "danger";
            case 5:
                return "warning";
            case 6:
                return "info";
            default:
                return "yellow";
        }
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/", {
                name: this.state.user,
                detail: this.state.quote,
            })
            .then((res) => {
                this.setState({
                    user: "",
                    quote: "",
                });
            })
            .catch((err) => {});
    };

    render() {
        return (
            <div class="pricing-header px-1 py-1 pt-md-2 pb-md-2 mx-auto text-center">
                <div class="logo-container">
                    <img src="{% static 'images/two_artichokes.png' %}" class="transparent-image" alt="artichoke logo"/>
                    <div class="overlay-text-1">ARTichoke</div>
                    <div class="overlay-text-2">Crafts</div>
                </div>
                <p class="lead">Let's make your gift ideas a reality or work together to design something great!</p>
                <div>
                    <span class="btn-container">
                    <a href="#" class="circle-btn"></a>
                    <a href="#" class="btn-text-2">Customer Reviews</a>
                    </span>
                    <span class="btn-container">
                    <a href="#" class="circle-btn"></a>
                    <a href="#" class="btn-text-2">Product Catalog</a>
                    </span>
                    <span class="btn-container">
                    <a href="#" class="circle-btn"></a>
                    <a href="#" class="btn-text-3">Design Your Own</a>
                    </span>
                    <span class="btn-container">
                    <a href="https://www.etsy.com/shop/ARTichokeCrafts" target="_blank" class="circle-btn"></a>
                    <a href="https://www.etsy.com/shop/ARTichokeCrafts" target="_blank" class="btn-text-1">Etsy</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Home;