import React, { PropTypes } from 'react';

class Card extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        maxWidth:'760px',
        margin:'0 auto',
        height:'100px',
        boxShadow: 'rgba(0,0,0,0.188235) 0px 10px 30px,rgba(0,0,0,0.227451) 0px 6px 10px',
        marginTop:'20px'
      },
      left:{
        width:'13%',
        lineHeight:'100px',
        height:'100px',
        color:'#ffffff',
        textAlign:'center',
        float:'left',
        backgroundColor:'#00bcd4',
        fontWeight:'800',
        fontSize:'1.8em'
      },
      right:{
        width:'87%',
        padding:'10px 20px',
        color:'#000',
        float:"left",
      },
      h3:{
        padding:'10px 0',
        fontSize:'1.6em',
        fontWeight:'500'
      },
      p:{
        fontSize:'1.1em',
        fontWeight:'lighter',
        paddingTop:'4px'
      },
    }
    let xxx = this.props.item;
    let cards=xxx.map( (item,i) =>
  (
    <div style={styles.root} key={i}>
       <div style={styles.left}>
         <span>{item.index}</span>
       </div>
       <div style={styles.right}>
        <h3 style={styles.h3}>{item.title}</h3>
        <p style={styles.p}>{item.date}</p>
       </div>
    </div>

  )
)
    return(
      <div>
       {cards}
      </div>


    )
  }
}
// Card.defaultProps={
//   title:'超级无敌帅小阳',
//   date:'2016-09-07',
//   index:1
// }
// Card.PropTypes = {
//   title:PropTypes.string.isRequired,
//   date:PropTypes.string.isRequired,
//   index:PropTypes.number.isRequired,
//
// }
Card.propTypes = {
  item:PropTypes.array.isRequired
};
export default Card;
