import { Component } from "react";


class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null,
    }
    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDrivedStateFromProps(nextProps, prevProps) {
        console.log('getDrivedStateFromProps')
        if(nextProps.color !== prevProps.color){
            return {color : nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        //return ture : render() 함수 호출
        //return false : render() 함수 호출 되지 않음
        return nextState.number % 10 !==4;
    }

    componentWillUnmount(){
        //DOM 에서 컴포넌트가 제거 되기 직전 호출됨
        //DOM 에서 컴포넌트가 제거 되기 직전 마무리 작업 필요하면 
        console.log('componentWillUnmount');
    }

    handleClick=() => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //render() 함수에서 만들어진 결과물을 브라우저에 실제 반영되기 직전에 호출되는 함수
        //업데이트 되기 직전값을 참고할 때 사용함
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate',prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
        };

        return(
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}.substring(5,7) + {this.state.color}.substring(3,5) + {this.state.color}.substring(1,3) </p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;


