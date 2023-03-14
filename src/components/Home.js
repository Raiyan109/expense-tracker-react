import React from 'react';
import Balance from './Balance';
import '../App.css'
import AddRemove from './AddRemove';

const Home = () => {
    return (
        <div>

            <main class="l-card">
                <section class="l-card__text">
                    <Balance />
                    <AddRemove />
                </section>
                <section class="l-card__user">
                    <div class="l-card__userInfo">
                        <span>Naruto Uzumaki</span>
                        <span>Seventh Hokage</span>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;