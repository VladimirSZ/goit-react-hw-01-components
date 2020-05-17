import React from 'react'
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import style from './statistics.module.css';



const Statistics =({title,stats}) =>(
<section className={style.statistics}>
<h2 className={style.title}>{title}</h2>

  <ul className={style.statList}>
      {stats.map((item) => <StatisticsItem item={item} key={item.id}/> 

   )
      }
</ul>
</section>
);
export default Statistics;



Statistics.propTypes = {
   title: PropTypes.string.isRequired,
   stats: PropTypes.arrayOf(
       PropTypes.shape({
           label: PropTypes.string.isRequired,
           percentage: PropTypes.number.isRequired,
           id: PropTypes.string.isRequired,
       }),
   ).isRequired,
};