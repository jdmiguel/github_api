import React, {Component, Fragment} from 'react';
import Intro from './components/containers/Intro/';
import Content from './components/containers/Content/';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            allUserData: [],
            intro: true
        }
    }

    setDataHandler = data => {
        const { allUserData } = this.state;
        const allUserDataCloned = [...allUserData];

        allUserDataCloned.push(data);

        this.setState({
            allUserData: allUserDataCloned
        })
    }

    toogleIntro = state => {
        this.setState({
            intro: state
        })
    }

    render(){
        const { 
            intro,
            allUserData
        } = this.state; 

        return(
            <Fragment>
                { intro 
                    ? <Intro 
                        setData={ data => this.setDataHandler(data)}
                        outIntro={() => this.toogleIntro(false)}
                        /> 
                    : <Content 
                        userData={allUserData}
                        onIntro={() => this.toogleIntro(true)}
                    />
                }
            </Fragment>
        )
    }
}

export default App;