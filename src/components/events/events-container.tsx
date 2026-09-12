import { EventCard } from './event-card'
import type { Event } from '@/data/events'

interface EventsContainerProps {
  selectedType: 'General' | 'Competition' | 'Workshop' | 'All'
  events: Event[]
}

export const EventsContainer = ({ selectedType, events }: EventsContainerProps) => {
  const filteredEvents = events.filter((event) => selectedType === 'All' || event.type === selectedType)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingEvents = filteredEvents
    .filter((event) => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate.getTime() >= today.getTime()
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const pastEvents = filteredEvents
    .filter((event) => {
      const eventDate = new Date(event.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate.getTime() < today.getTime()
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime()) // most recent past first

  return (
    <div className="my-6 flex flex-col items-center gap-8 lg:my-12">
      {upcomingEvents.length === 0 && pastEvents.length === 0 ? (
        <p className="mt-10 text-4xl text-neutral-400">No events available</p>
      ) : (
        <>
          {upcomingEvents.length > 0 && (
            <div className="mt-10 w-full">
              <h3 className="mb-4 text-center text-xl font-semibold">Upcoming Events</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={`${event.title}-${event.date.toISOString()}`} event={event} />
                ))}
              </div>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div className="mt-10 w-full">
              <h3 className="mb-4 text-center text-xl font-semibold text-neutral-500">Past Events</h3>
              <div className="flex flex-wrap justify-center gap-4 opacity-50">
                {pastEvents.map((event) => (
                  <EventCard key={`${event.title}-${event.date.toISOString()}`} event={event} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
