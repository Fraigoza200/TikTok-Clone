import React from 'react';
import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="app">    
    <div className='app_videos'>
      <Video url='https://player.vimeo.com/external/412186615.sd.mp4?s=594d158e4c5e40c4263e6392313d0a9413679ec9&profile_id=165&oauth2_token_id=57447761' 
      channel='thepatriotvirus'
      description='Rise Above Fitness'
      song='Diemonds by Suicide Boyz'
      likes={145}
      messages={88}
      shares={425}
      />
      <Video url='https://player.vimeo.com/external/427124351.sd.mp4?s=048d9c5c73537be4079bdcc1423317106ef1b09f&profile_id=165&oauth2_token_id=57447761'
      channel='tquesadilla'
      description='Yuh get in to it'
      song='Firestone by KYGO'
      likes={250}
      messages={79}
      shares={562}
      />
    </div>
      {/* app container */}
        {/* app videos */}
        {/* Videos */}
    </div>
  );
}

export default App;
