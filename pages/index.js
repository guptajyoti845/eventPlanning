import {getFeaturedEvents} from "dummy-data";
import EventList from "@/components/event-list";

function HomePage() {

    const featuredEvents = getFeaturedEvents();
    return <EventList items={featuredEvents}/>
}

export default HomePage;
