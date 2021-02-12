import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    render(){
        return (
            <div>
                <h3>Click to add items</h3>
                <button onClick={() => {
                    const items = this.state.items;
                    items.push(<MarketItem count = {items.length  }/>);
                    this.setState({items: items});
                }
                }> Click Me!</button>
                <div>{
                    this.state.items.map(function(count){
                        return <p key={count}>{count}</p>
                    }
                    
                        
                    )
                    }

                </div>
            </div>
        );
}
}

export default Market;