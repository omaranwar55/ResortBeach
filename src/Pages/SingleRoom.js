import React ,{Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../Components/StyledHero';
class SingleRoom extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=RoomContext;
    render(){
        const {getRoom}=this.context;
        const room=getRoom(this.state.slug);
        if(!room){
            return<div className="error">
                <h3>NO SUCH ROOM COULD BE FOUND...</h3>
                <Link to="/rooms" className="btn-primary">
                    BACK TO ROOMS
                </Link>
            </div>
        }
    const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
    const [mainImg,...defaultImg]=images;
    return(
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    Back To Rooms   
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                    return <img key={index} src={item} alt={name}/>
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>Price : ${price}</h6>
                    <h6>Size  : ${size} SQFT</h6>
                    <h6>Max Capacity : {capacity >1 ?`${capacity} Peaple`: `${capacity} Person`}</h6>
                    <h6>{pets?"pets allowed":"No pets allowed"}</h6>
                    <h6>{breakfast &&"free breakfast included"}</h6>
                </article>
            </div>
        </section>
        <hr/>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((itme,index)=>{
                    return <li key={index}>- {itme}.</li>
                })}
                </ul> 

        </section>
        </>
    )
  }
}
export default SingleRoom;