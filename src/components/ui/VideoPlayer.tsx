import React, { useState } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  onEnd: () => void;
  source_location: NodeRequire;
  flipped: boolean;
}

export function VideoPlayer({ onEnd, source_location, flipped }: VideoPlayerProps) {
  const video = React.useRef<any>(null);

  return (
    <View>
      <Video
        style={{ width: '100%', height: 300 }}
        ref={video}
        source={{uri: source_location}}
        muted={false}
        onEnd={onEnd}
      />
    </View>
  );
};
