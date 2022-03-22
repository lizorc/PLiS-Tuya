import React from 'react';
import styles from './card.module.css';

function Card(props) {
    const { element } = props;
    return (
        <div className={ styles.card }>
            <div className={ styles.cardBody }>
                <h4 className="card-title">{element.title}</h4>
                <p className="card-description">
                    {element.description}
                </p>
            </div>
        </div>
    );
}

export default Card;