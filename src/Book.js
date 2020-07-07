import React, { Component } from 'react';
// import Button from './Buttons';

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state={
            count:1,
            showInfo:true
        }
        // this.handleClick=this.handleClick.bind(this);
    }
    // handleClick(){
    //     console.log("you clicked me");
    //     console.log(this.state.count);
    // }
    // handleClick =()=>
    // {
    //     console.log("you clicked me");
    //     console.log(this.state.count);
    // }
    //stateimmutable
    //shallowmerge
    //this.setstate
//     addCount =()=>{
// this.setState({count:this.state.count +1});
//     };
//     resetCount = ()=>{
//         this.setState({count:0});

//     };
//     lowerCount=()=>{
//         this.setState({count:this.state.count-1});

//     };
handleinfo=()=>{
    this.setState({
        showInfo:!this.state.showInfo
    })

};
    render() {
        const {id, img, title, author } = this.props.info;
        const { handleDelete }=this.props;
        const checkInfo=(info)=>{
            if(info===true){
                return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            }
            else{
                return null
            }
        }
        return (
            <article className="book">
                <img src={img} width="150" alt="book image" />
                <div>
                    <h4>Title: {title}</h4>
                    <h6>Author: {author}</h6>
                    <button type ="button"onClick={this.handleinfo}>Toggle Info</button>
                    {/* function */}
                    {checkInfo(this.state.showInfo)}
                    {/* ternary operator */}
                    {/* {this.state.showInfo ?
                    (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>)
                    : null} */}
                   {/* and */}
                    {/* {
                        this.state.showInfo &&
                            (<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            )
                    } */}
                    <button type ="button"onClick={()=>handleDelete(id)}>Delete Me</button>
                    {/* <Button handleDelete={handleDelete}/> */}
        {/* <h6>Count:{this.state.count}</h6>
                    <button type="button" onClick={this.addCount}>add count</button>
                    <button type="button" onClick={this.lowerCount}>lower count</button>
                    <button type="button" onClick={this.resetCount}>reset count</button> */}</div>
            </article>
        )
    }
}
