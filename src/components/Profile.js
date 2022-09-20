import React from 'react';
import '../stylesheets/Profile.css'
import WindowTracker from './WindowTracker';

export default function Proifle() {
   
    
    return (
      <div className="profile--container">
        <h2 className="profile--title">About Me</h2>
        <p className="profile--description">
          <strong>
            Currenlty I am residing in Scotland and trying to get a working
            visa.
          </strong>
          <hr />
          I enjoy being able to travel around and see all this beautiful planet
          offers. On top of traveling, the opportunity to eat in various
          countries is amazing! In addition I love trying various cuisines and
          finding new dishes. During my free time, when at home, I have been
          working on myself by improving programming skills with lessons online
          and practice.
          <br />
          Being a good team player is one of my greatest assets. Throughout my
          life I have played various sports, from football to American football,
          which initally instilled that teamwork spirit. Having also served in the military
          further strengthened a team mindset. When a group of
          people are working in sync and getting things accomplished it creates
          an undescribable joy within myself. Teamwork makes the dream work.
          <br />
          When I have time I enjoy diving into art and getting the creative
          juices flowing. The moment when something of my imagination goes on to
          the page and looks remotely close, it is always such an accomplishment. I may
          not be the best artist but still find great joy within it. Doing frontend web
          development work feels like an art project to me, being able to add
          components and make them come alive.
        </p>

        <WindowTracker />
      </div>
    );
}