import {getAllEvents, getFilteredEvents} from "@/dummy-data";
import EventList from "@/components/event-list";
import EventsSearch from "@/pages/events/events-search";
import {Fragment} from "react";
import {useRouter} from "next/router";
import {log} from "next/dist/server/typescript/utils";

function AllEventsPage() {
    const events = getAllEvents();

    const router = useRouter()

    function onSearchHandler(selectedYear, selectedMonth) {
        const fullPath = `/events/${selectedYear}/${selectedMonth}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={onSearchHandler}/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEventsPage;
