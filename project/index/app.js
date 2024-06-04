import React from 'react';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import JobList from './components/JobList';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MainInfo />
            <JobList />
            <Banner />
            <Footer />
        </div>
    );
}

export default App;
