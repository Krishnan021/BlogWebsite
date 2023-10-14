import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import Header from "../../components/header";
import Search from "../../components/search";
import BlogList from "../../components/blogList"; 
import blogList from '../../config/data'
import "../../App.css";

const Home = () =>{
    return (
        <div class="container">
            <Header></Header>
            <Search></Search>
            <BlogList blogs = {blogList} />
        </div>
    )
}

export default Home;