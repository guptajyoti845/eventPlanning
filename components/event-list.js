import EventItem from "@/components/event-item";
import classes from './event-list.module.css'
function EventList(props) {
    const {items} = props;
    return <ul className={classes.list}>
        {items.map(item =>
            <EventItem key={item.id}
                       title={item.title} id={item.id}
                       location={item.location}
                       image={item.image} date={item.date}/>)}
    </ul>
}

export default EventList;
