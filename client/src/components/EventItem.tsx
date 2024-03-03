import EventProps from '@/interfaces/EventProps';
import React from 'react';

const EventItem = (event: EventProps) => {
    const { title, image, date, location, id } = event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <li>
        <img src={'/' + image} alt={title} />
        <div>
          <div>
            <h2>{title}</h2>
            <div>
              
              <time>{humanReadableDate}</time>
            </div>
            <div>
              
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div>
            <button >
              <span>Explore Event</span>
              <span>
               
              </span>
            </button>
          </div>
        </div>
      </li>
    );
};

export default EventItem;