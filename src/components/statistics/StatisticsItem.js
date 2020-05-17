import React from 'react'
import style from './statistics.module.css';
const StatisticsItem = ({item:{label,percentage}}) => {
    return (
<li className={style.item} >
<span className={style.label}>{label} </span>
<span className={style.percentage}>{percentage}%</span>
    </li>
        
    );
}

export default StatisticsItem;