import React, { useState } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

interface VideoPlayerProps {
  onEnd: () => void;
  source_location: NodeRequire;
}

export function VideoPlayer({ onEnd, source_location }: VideoPlayerProps) {
  const video = React.useRef<any>(null);

  return (
    <View>
      <Video
        ref={video}
        source={{uri: source_location}}
        muted={false}
        style={{ width: '100%', height: 300 }}
        onEnd={onEnd}
      />
    </View>
  );
};
