import React,{Components, Component} from 'react';
import Header from './header';
import Mainp from './mainp';



export default class Myfile extends Component{
    render(){
        return (
            <div>

                <Header />
                <Mainp />
            </div>
        )
    }
}