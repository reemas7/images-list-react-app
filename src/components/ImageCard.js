import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
        this.state = {span: 0}
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan)
    }
    setSpan = ()=>{
        const height = this.imageRef.current.clientHeight;

        const span = Math.ceil(height/10);
        this.setState({span});
    }
    render(){
        const image = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={image.description} src={image.urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;