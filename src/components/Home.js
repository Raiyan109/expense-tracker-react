import React from 'react';
import Balance from './Balance';
import '../App.css'
import AddRemove from './AddRemove';
import DisplayTrans from './DisplayTrans';

const Home = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <main className="l-card">
                <section className="l-card__text">
                    <Balance />
                    <AddRemove />
                </section>
            </main>

            <section className="l-card">
                <section className="l-card__text">
                    <DisplayTrans />
                </section>
            </section>
        </div>
    );
};

export default Home;