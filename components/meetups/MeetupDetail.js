import classes from './MeetupDetail.module.css';

function MeetupDetail(props){
    return (
        <section className={classes.detail}>
            <img src={props.image} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
        </section>
    );
}
export  {MeetupDetail};