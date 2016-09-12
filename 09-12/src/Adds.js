import React from 'react'

class GreateList extends React.Component {
    constructor(){
        super();
        this.state={
            text:'',
            items:[]

        }
    }
    creat(e){
        console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }
    sub(e){
        e.preventDefault();
        this.state.items.push(this.state.text);
        this.setState({text:''})
    }


    render () {
        return (
            <div>
                <form onSubmit={this.sub.bind(this)}>
                    <input type="text" value={this.state.text} onChange={this.creat.bind(this)}/>
                    <button>Great#{this.state.items.length+1}</button>
                </form>
                <ul>
                    {this.state.items.length==0 ? 'wirte' : this.state.items.map((item,i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default GreateList;
