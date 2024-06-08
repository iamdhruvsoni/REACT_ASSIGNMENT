import React, { Component } from 'react'

 class LifecycleClass extends Component { 
    constructor(){
        super()
        this.state = {
            rollno : 101,
            name:"Test"
        }
        console.log('Constructor calling...'+this.state.name);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name:"Pqr"})
            console.log('component did mount called...'+this.state.name);
        }, 3000);

    }
    static getDeprivedStateFromProps(props,state){
        console.log('get deprived state from props called...');
        return state;
    }
    
    shouldComponentUpdate(){
        console.log('should component updated'+this.state.name);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('prev state name is '+prevState.name);
        return prevState;
    }

    componentDidUpdate(){
        console.log('Name is '+this.state.name);
    }

    componentWillUnmount(){
        console.log('destroyed...');
    }
  render() {
    return (
      <div>
        <h3>Rollno is -- {this.state.rollno}</h3>
        <h3>Name is -- {this.state.name}</h3>
        <button style={{color:'yellow', backgroundColor:'dodgerblue'}} onClick={()=>this.setState({name:"Abc"})}>Change name</button>
      </div>
    )
  }
}


export default LifecycleClass;
