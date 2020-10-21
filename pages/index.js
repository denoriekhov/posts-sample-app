import React from "react";

const fetchPosts = async () => {
    return fetch(`${process.env.API_URL}/api/hello`)
        .then(res => res.json());
};

const Home = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
        </>
    )
};

export async function getServerSideProps(context) {
    const {text} = await fetchPosts();
    return {
        props: {
            text
        }
    }
}

export default Home
